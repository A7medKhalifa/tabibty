import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import SearchInput from './components/SearchInput'
import Header from 'components/Header'
import HomeCardsList from 'components/Home Cards List'
import { useSelector } from 'react-redux'
import { selectSearch } from 'store/app'

const SearchSreen = () => {
    const [load, setLoad] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')
    const SearchArr = useSelector(selectSearch)

    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header Title='البحث' />
            <SearchInput inputValue={inputValue} setInputValue={setInputValue} setLoad={setLoad} />
            <Text style={styles.SearchText}>نتائج البحث</Text>
            {
                SearchArr?.length == 0 ?
                    <View style={styles.EmptyContainer}>
                        <Text style={styles.EmptyText}>لا يوجد نتائج </Text>
                    </View>
                    :
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <HomeCardsList isLoading={load} data={SearchArr?.length % 3 === 2 ? [...SearchArr, { empty: true }] : SearchArr} />
                    </ScrollView>
            }

        </SafeAreaView>
    )
}

export default SearchSreen