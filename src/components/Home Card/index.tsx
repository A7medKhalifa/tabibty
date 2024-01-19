import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { EmptyHeart, FillHeart, Star } from 'assets/svgs'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from 'store/store'
import { useSelector } from 'react-redux'
import { selectFavourites } from 'store/app'
import AppThunks from 'store/app/thunks'
import FastImage from 'react-native-fast-image'

const HomeCard = ({
    item,
    lab,
    style
}: {
    item?: any,
    lab?: boolean
    style?: any
}) => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const Favourites = useSelector(selectFavourites)
    const [load, setLoad] = React.useState(false)
    let exist = lab ? (Favourites?.labs?.some((ele: any) => ele?._id == item?._id)) : (Favourites?.clinics?.some((ele: any) => ele?._id == item?._id))

    const AddOrRemoveFromFavourites = () => {
        setLoad(true)
        dispatch(AppThunks.doChangeFavourites(item?._id)).then(() => (
            setLoad(false),
            dispatch(AppThunks.doGetFavorites())
        ))
    }
    console.log(item)
    return (
        <TouchableOpacity activeOpacity={.8} onPress={() => { navigate('Details', { id: item?._id, lab }) }}>
            <FastImage source={{ uri: item?.thumbnail != 'N/A' ? item?.thumbnail : lab ? 'https://aul.edu.ng/static/images/reviews/mls.jpg' : 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais' }}
                style={[styles.container, style]}
            >
                <TouchableOpacity disabled={load} onPress={() => AddOrRemoveFromFavourites()} activeOpacity={1} style={styles.Heart}>
                    {
                        exist ? <FillHeart /> : <EmptyHeart />
                    }
                </TouchableOpacity>
                <View style={styles.TextContainer}>
                    <Text numberOfLines={1} style={styles.Title}>{item?.specialization}</Text>
                    <Text numberOfLines={1} style={styles.Name}>{item?.doctorName}</Text>
                    <View style={styles.Row}>
                        <Star />
                        <Text style={styles.Rate}>{item?.averageRating} تقيم</Text>
                    </View>
                </View>
                <LinearGradient style={styles.LinearGradient} colors={['rgba(250, 250, 252, 0.00)', '#D63EC7']} />
            </FastImage>
        </TouchableOpacity >

    )
}

export default HomeCard