import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/Header'
import styles from './styles'
import { FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native'
import { useAppDispatch } from 'src/redux/store'
import AppThunks from 'src/redux/app/thunks'
import { useSelector } from 'react-redux'
import { selectSaves } from 'src/redux/app'
import ArticleCardsList from 'components/Home Article List'
import { useNavigation } from '@react-navigation/native'

const BookmarkScreen = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const Saves = useSelector(selectSaves)
    const [Loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            setLoading(true)
            dispatch(AppThunks.doGetSaves()).then(() => setLoading(false))
        })
        return RenderFunction
    }, [navigation])
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header Title='العناصر المحفوظة' />
            <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
                <Text style={[styles.Title]}>مقالات تم حفظها</Text>
                <ArticleCardsList isLoading={Loading} data={Saves} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default BookmarkScreen