import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/Header'
import styles from './styles'
import Taps from './components/Taps'
import { Doctors, Labs } from 'src/utils/Dummy'
import HomeCardsList from 'components/Home Cards List'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from 'store/store'
import { useSelector } from 'react-redux'
import { selectFavourites } from 'store/app'
import AppThunks from 'store/app/thunks'
import { Text, View } from 'react-native'

const FavouriteScreen = () => {
    const [index, setIndex] = React.useState(0)
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const Favourites = useSelector(selectFavourites)
    const [Loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            setLoading(true)
            dispatch(AppThunks.doGetFavorites()).then(() => setLoading(false))
        })
        return RenderFunction
    }, [navigation])
    return (
        <SafeAreaView style={styles.Container}>
            <Header Title='المفضلة' />
            <Taps index={index} setIndex={setIndex} />
            {
                (index == 1 ? Favourites?.labs.length == 0 : Favourites?.clinics?.length == 0) ?
                    <View style={styles.EmptyContainer}>
                        <Text style={styles.EmptyText}>لا يوجد مفضلة </Text>
                    </View>
                    :
                    <HomeCardsList lab={index == 1 ? true : false} isLoading={Loading} data={(index == 1 ? Favourites?.labs : Favourites?.clinics).length % 3 === 2 ? [...(index == 1 ? Favourites?.labs : Favourites?.clinics), { empty: true }] : (index == 1 ? Favourites?.labs : Favourites?.clinics)} />
            }

        </SafeAreaView>
    )
}

export default FavouriteScreen