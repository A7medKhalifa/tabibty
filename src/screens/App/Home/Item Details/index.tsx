import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Back, Call, Fav, Location, Star, Share } from 'assets/svgs'
import { Colors } from 'theme/colors'
import Fonts from 'theme/fonsFamily'
import Rating from './Components/Rating'
import { useNavigation } from '@react-navigation/native'

const DetailScreen = () => {
    const { goBack, navigate } = useNavigation<any>()
    const [defaultRating, setDefaultRating] = React.useState(2);
    const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <ImageBackground style={styles.ImageBackground} source={{ uri: 'https://aul.edu.ng/static/images/reviews/mls.jpg' }}>
                <TouchableOpacity activeOpacity={.8} onPress={() => { goBack() }} style={styles.BackButton}>
                    <Back />
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.WhiteContainer}>
                <View style={styles.FirstRow}>
                    <View style={styles.Row}>
                        <Text style={styles.Rate}>4.7 تقيم</Text>
                        <Star width={20} height={20} />
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Title}>معمل</Text>
                        <Text style={styles.Name}>مبرة العصافرة</Text>
                    </View>

                </View>

                <View style={styles.ButtonsContainer}>
                    <Share />
                    <Fav style={{ marginLeft: 20 }} />
                    <Location style={{ marginHorizontal: 20 }} />
                    <Call />
                </View>

                <View style={styles.RatingContainer}>
                    <Rating defaultRating={defaultRating} maxRating={maxRating} setDefaultRating={setDefaultRating} />
                    <Text style={styles.RateText}>تقيم المعمل</Text>
                </View>

                <TouchableOpacity onPress={() => { navigate('Experience') }} style={[styles.Button, { marginTop: 35 }]}>
                    <Text style={styles.ButtonText}>الخبرات العملية</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigate('Review') }} style={[styles.Button, { marginTop: 10 }]}>
                    <Text style={styles.ButtonText}>التقيمات</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen