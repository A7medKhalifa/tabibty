import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/Header'
import { ScrollView } from 'react-native'
import styles from './styles'
import { useAppDispatch } from 'src/redux/store'
import { useSelector } from 'react-redux'
import { selectArticles } from 'src/redux/app'
import AppThunks from 'src/redux/app/thunks'
import ArticleCardsList from 'components/Home Article List'

const MoreAdviceScreen = () => {
    const dispatch = useAppDispatch()
    const Articles = useSelector(selectArticles)
    const [Loading, setLoading] = React.useState(false)
    const [limit, setLimit] = React.useState(10)
    function handleInfinityScroll(event: any) {
        let mHeight = event?.nativeEvent.layoutMeasurement.height;
        let cSize = event?.nativeEvent.contentSize.height;
        let Y = event?.nativeEvent.contentOffset.y;
        if (Math.ceil(mHeight + Y) >= cSize) return true;
        return false;
    }
    React.useEffect(() => {
        setLoading(true)
        dispatch(AppThunks.doGetArticles({
            page: 1,
            limit: limit
        })).then(() => setLoading(false))
    }, [])
    React.useEffect(() => {
        dispatch(AppThunks.doGetArticles({
            page: 1,
            limit: limit
        }))
    }, [limit])
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header hasBack Title='مقالات' />
            <ScrollView onMomentumScrollEnd={(event) => { if (handleInfinityScroll(event)) { Articles?.length >= limit && setLimit(limit + 10) } }}
                showsVerticalScrollIndicator={false}>
                <Text style={[styles.Title]}>مقالات قد تناسبكِ</Text>
                <ArticleCardsList isLoading={Loading} data={Articles} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default MoreAdviceScreen