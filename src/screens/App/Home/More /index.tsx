import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import { useRoute } from '@react-navigation/native'
import MoreHeader from '../Main Home/components/MoreHeader'
import SearchInput from 'screens/App/Search/components/SearchInput'
import HomeCardsList from 'components/Home Cards List'
import { Doctors, Labs } from 'src/utils/Dummy'
import { useAppDispatch } from 'src/redux/store'
import AppThunks from 'src/redux/app/thunks'
import { useSelector } from 'react-redux'
import { selectClinics } from 'src/redux/app'

const MoreScreen = () => {
    const { type }: any = useRoute().params
    const dispatch = useAppDispatch()
    const Clinics = useSelector(selectClinics)
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
        type == 'doc' && dispatch(AppThunks.doGetClinics({
            page: 1,
            limit: limit
        })).then(() => setLoading(false))
    }, [type])
    React.useEffect(() => {
        type == 'doc' && dispatch(AppThunks.doGetClinics({
            page: 1,
            limit: limit
        }))
    }, [limit])
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header hasBack Title={type == 'doc' ? 'الطبيبات' : 'المعامل'} />
            <SearchInput />
            <ScrollView onMomentumScrollEnd={(event) => { if (handleInfinityScroll(event)) { Clinics?.length >= limit && setLimit(limit + 10) } }}
                showsVerticalScrollIndicator={false}>
                <MoreHeader title={type == 'doc' ? 'الطبيبات الأكثر تقيمًا في منطقتك' : 'المعامل الأكثر تقيمًا في منطقتك'} />
                <HomeCardsList isLoading={Loading} data={(type == 'doc' ? Clinics : Labs)?.length % 3 === 2 ? [...((type == 'doc' ? Clinics : Labs)), { empty: true }] : (type == 'doc' ? Clinics : Labs)} />
                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView >
    )
}

export default MoreScreen