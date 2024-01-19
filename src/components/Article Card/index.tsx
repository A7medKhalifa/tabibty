import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Bookmark, EmptyBookmark, Star } from 'assets/svgs'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import { selectSaves } from 'src/redux/app'
import { useAppDispatch } from 'src/redux/store'
import AppThunks from 'src/redux/app/thunks'
import FastImage from 'react-native-fast-image'

const ArticleCard = ({
    item,
}: {
    item?: any,
}) => {
    const dispatch = useAppDispatch()
    const Saves = useSelector(selectSaves)
    const [load, setLoad] = React.useState(false)
    let exist = Saves?.some((ele: any) => ele?._id == item?._id);

    const AddOrRemoveFromSaves = () => {
        setLoad(true)
        dispatch(AppThunks.doGetChangeSaves(item?._id)).then(() => (
            setLoad(false),
            dispatch(AppThunks.doGetSaves())
        ))
    }
    console.log(item)
    return (
        <TouchableOpacity activeOpacity={.8} onPress={()=>{Linking.openURL(item?.url)}}>
            <FastImage source={{ uri: item?.thumbnail != 'N/A' ? item?.thumbnail : 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais' }} style={styles.container}>
                <TouchableOpacity disabled={load} onPress={() => { AddOrRemoveFromSaves() }} activeOpacity={.8} style={styles.Heart}>
                    {
                        exist ? <Bookmark /> : <EmptyBookmark />
                    }
                </TouchableOpacity>
                <View style={styles.TextContainer}>
                    <Text numberOfLines={1} style={styles.Title}>{item?.articleTitle}</Text>
                    <Text style={styles.Name}>{item?.author?.doctorName}</Text>
                </View>
                <LinearGradient style={styles.LinearGradient} colors={['rgba(250, 250, 252, 0.00)', '#D63EC7']} />
            </FastImage>
        </TouchableOpacity>
    )
}

export default ArticleCard