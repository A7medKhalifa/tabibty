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
import { selectClinics, selectSearch } from 'src/redux/app'

const MoreScreen = () => {
    const { type }: any = useRoute().params
    const dispatch = useAppDispatch()
    const Clinics = useSelector(selectClinics)
    const Search = useSelector(selectSearch)
    const [Loading, setLoading] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')
    const [limit, setLimit] = React.useState(15)
    function handleInfinityScroll(event: any) {
        let mHeight = event?.nativeEvent.layoutMeasurement.height;
        let cSize = event?.nativeEvent.contentSize.height;
        let Y = event?.nativeEvent.contentOffset.y;
        if (Math.ceil(mHeight + Y) >= cSize) return true;
        return false;
    }
    React.useEffect(() => {
        setLoading(true)
        dispatch(AppThunks.doGetClinics({
            page: 1,
            limit: limit,
            category: type == 'doc' ? 'CLINIC' : 'LAB'
        })).then(() => { setLoading(false) })
    }, [type])
    React.useEffect(() => {
        dispatch(AppThunks.doGetClinics({
            page: 1,
            limit: limit,
            category: type == 'doc' ? 'CLINIC' : 'LAB'
        })).then(() => { setLoading(false) })
    }, [limit])
    console.log(inputValue == '')
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header hasBack Title={type == 'doc' ? 'الطبيبات' : 'المعامل'} />
            <SearchInput inputValue={inputValue} setInputValue={setInputValue} setLoad={setLoading} category={`&category=${type == 'doc' ? 'CLINIC' : 'LAB'}`} />
            {
                inputValue == '' ?
                    (Clinics?.length <= 0 ?
                        <View style={styles.EmptyContainer}>
                            <Text style={styles.EmptyText}>لا يوجد نتائج </Text>
                        </View>
                        :
                        <>
                            <MoreHeader title={type == 'doc' ? 'الطبيبات الأكثر تقيمًا في منطقتك' : 'المعامل الأكثر تقيمًا في منطقتك'} />
                            <ScrollView onMomentumScrollEnd={(event) => { if (handleInfinityScroll(event)) { Clinics?.length >= limit && setLimit(limit + 15) } }} showsVerticalScrollIndicator={false}>
                                <HomeCardsList lab={type == 'doc' ? false : true} isLoading={Loading} data={Clinics?.length % 3 === 2 ? [...Clinics, { empty: true }] : Clinics} />
                            </ScrollView>
                        </>
                    )
                    :
                    (Search?.length <= 0 ?
                        <View style={styles.EmptyContainer}>
                            <Text style={styles.EmptyText}>لا يوجد نتائج </Text>
                        </View>
                        :
                        <>
                            <MoreHeader title={type == 'doc' ? 'الطبيبات الأكثر تقيمًا في منطقتك' : 'المعامل الأكثر تقيمًا في منطقتك'} />
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <HomeCardsList lab={type == 'doc' ? false : true} isLoading={Loading} data={Search?.length % 3 === 2 ? [...Search, { empty: true }] : Search} />
                            </ScrollView>
                        </>
                    )
            }
            <View style={{ height: 40 }} />
        </SafeAreaView >
    )
}

export default MoreScreen