import { View, Text, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { TouchableOpacity } from 'react-native'
import { Back, Call, Fav, Location, Star, ShareIcon, FillHeart, FavText, EmptyStar } from 'assets/svgs'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAppDispatch } from 'store/store'
import AppThunks from 'store/app/thunks'
import { useSelector } from 'react-redux'
import { selectDetails, selectFavourites, selectReviews } from 'store/app'
import LottieView from 'lottie-react-native'
import { BigLoader } from 'assets/lotties'
import FastImage from 'react-native-fast-image'
import Share from 'react-native-share'

const DetailScreen = () => {
    const dispatch = useAppDispatch()
    const { id, lab }: any = useRoute().params
    const navigation = useNavigation<any>()
    const [Rating, setRating] = React.useState<any>(5);
    const [load, setLoad] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);
    const Favourites = useSelector(selectFavourites)
    const data = useSelector(selectDetails)
    const Reviews = useSelector(selectReviews)
    const countTrueKeys = Reviews.filter((review: any) => review.isCurrentUserReview);
    let exist = lab ? (Favourites?.labs?.some((ele: any) => ele?._id == id)) : (Favourites?.clinics?.some((ele: any) => ele?._id == id))


    const url = `tabibty://Details?id=${id}&lab=${lab}`;
    const title = `${data?.doctorName}`;

    const options = {
        title,
        url,
    };
    console.log(countTrueKeys)
    const share = async (customOptions = options) => {
        try {
            await Share.open(customOptions);
        } catch (err) {
            console.log(err);
        }
    };
    console.log(Rating)
    const AddOrRemoveFromFavourites = () => {
        setLoading(true)
        dispatch(AppThunks.doChangeFavourites(id)).then(() => (
            setLoading(false),
            dispatch(AppThunks.doGetFavorites())
        ))
    }
    useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            setLoad(true);
            dispatch(AppThunks.doGetReviews(id))
            lab ?
                dispatch(AppThunks.doGetDetails(`lab/${id}`)).then(() => {
                    setLoad(false)
                })
                :
                dispatch(AppThunks.doGetDetails(`clinic/${id}`)).then(() => {
                    setLoad(false)
                })
        })
        return RenderFunction
    }, [id, navigation])


    return (
        load ?
            <LottieView
                autoPlay
                source={BigLoader}
                style={{
                    height: '100%',
                    width: '100%'
                }}
            />
            :
            <SafeAreaView edges={['top']} style={styles.Container}>
                <FastImage style={styles.ImageBackground} source={{ uri: data?.thumbnail != 'N/A' ? data?.thumbnail : lab ? 'https://aul.edu.ng/static/images/reviews/mls.jpg' : 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais' }}>
                    <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.goBack() }} style={styles.BackButton}>
                        <Back />
                    </TouchableOpacity>
                </FastImage>

                <View style={styles.WhiteContainer}>
                    <View style={styles.FirstRow}>
                        <View style={styles.Row}>
                            <Text style={styles.Rate}>{data?.averageRating} تقيم</Text>
                            <Star width={20} height={20} />
                        </View>
                        <View style={styles.TextContainer}>
                            <Text style={styles.Title}>{lab ? `معمل` : `عيادة`}</Text>
                            <Text style={styles.Name}>{data?.doctorName}</Text>
                        </View>
                    </View>

                    <View style={styles.ButtonsContainer}>
                        <TouchableOpacity onPress={async () => { await share() }}>
                            <ShareIcon />
                        </TouchableOpacity>
                        {exist ?
                            <TouchableOpacity style={styles.FavButton} disabled={loading} onPress={() => AddOrRemoveFromFavourites()} activeOpacity={1} >
                                <FillHeart />
                                <FavText />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity disabled={loading} onPress={() => AddOrRemoveFromFavourites()} activeOpacity={1} >
                                <Fav style={{ marginLeft: 20 }} />
                            </TouchableOpacity>
                        }
                        <TouchableOpacity activeOpacity={.8} onPress={() => { Linking.openURL(data?.locationUrl); }}>
                            <Location style={{ marginHorizontal: 20 }} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={.8} onPress={() => { Linking.openURL(`tel:${data?.phone}`) }}>
                            <Call />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.RateContainer}>
                        {maxRating.map((star, index) => (star <= (countTrueKeys?.length == 0 ? parseInt(Rating) : (5 - countTrueKeys[0]?.rating)) ?
                            <TouchableOpacity activeOpacity={.8} onPress={() => {
                                navigation.navigate('Review', { id, lab, index })
                                setRating(index)
                            }}>
                                <EmptyStar width="24" height="24" style={styles.Star} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity activeOpacity={.8} onPress={() => {
                                navigation.navigate('Review', { id, lab, index })
                                setRating(index)
                            }}>
                                <Star style={styles.Star} width="25" height="25" />
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.RateText3}>تقييم الطبيبة</Text>
                    </View>

                    <TouchableOpacity onPress={() => { navigation.navigate('Experience',{lab}) }} style={styles.Button}>
                        <Text style={styles.ButtonText}>الخبرات العملية</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('Review', { id, lab, index: 0 }) }} style={[styles.Button, { marginTop: 10 }]}>
                        <Text style={styles.ButtonText}>التقيمات</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    )
}
export default DetailScreen