import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import SearchInput from './components/SearchInput'
import { Doctors, Labs } from 'src/utils/Dummy'
import Header from 'components/Header'
import HomeCardsList from 'components/Home Cards List'

const SearchSreen = () => {
    const [index, setIndex] = React.useState(0)
    return (
        <SafeAreaView style={styles.Container}>
            <Header Title='البحث' />
            <SearchInput />
            <Text style={styles.SearchText}>نتائج البحث</Text>
            {/* <View style={styles.EmptyContainer}>
                <Text style={styles.EmptyText}>لا يوجد مفضلة </Text>
            </View> */}
            <HomeCardsList data={(index == 1 ? Labs : Doctors).length % 3 === 2 ? [...(index == 1 ? Labs : Doctors), { empty: true }] : (index == 1 ? Labs : Doctors)} />

        </SafeAreaView>
    )
}

export default SearchSreen