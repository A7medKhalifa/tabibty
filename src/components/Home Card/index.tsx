import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { FillHeart, Star } from 'assets/svgs'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

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
    return (
        <TouchableOpacity activeOpacity={.8} onPress={() => { navigate('Details') }}>
            <ImageBackground source={{ uri: lab ? 'https://aul.edu.ng/static/images/reviews/mls.jpg' : 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais' }}
                style={[styles.container, style]}
                imageStyle={styles.imageStyle}
            >
                {/* <TouchableOpacity activeOpacity={1} style={styles.Heart}>
                    <FillHeart />
                </TouchableOpacity> */}
                <View style={styles.TextContainer}>
                    <Text numberOfLines={1} style={styles.Title}>{item?.specialization}</Text>
                    <Text numberOfLines={1} style={styles.Name}>{item?.doctorName}</Text>
                    <View style={styles.Row}>
                        <Star />
                        <Text style={styles.Rate}>{item?.averageRatingValue} تقيم</Text>
                    </View>
                </View>
                <LinearGradient style={styles.LinearGradient} colors={['rgba(250, 250, 252, 0.00)', '#D63EC7']} />
            </ImageBackground>
        </TouchableOpacity>

    )
}

export default HomeCard