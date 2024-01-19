import React from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import List from './components/List'
import Input from './components/Input'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'
import { selectDetails, selectEdit, selectReviews } from 'store/app'
import { useRoute } from '@react-navigation/native'


const ReviewScreen = () => {
    const { id, lab, index }: any = useRoute().params
    const data = useSelector(selectDetails)
    const Edit = useSelector(selectEdit)
    const Reviews = useSelector(selectReviews)
    const countTrueKeys = Reviews.filter((review: any) => review.isCurrentUserReview).length;

    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <View style={styles.secContainer}>
                <Header hasBack Title='التقيمات' />
                <ScrollView style={{ flex: 1 }}>
                    <View style={[styles.ImageContainer, { marginVertical: 38, alignItems: 'center' }]}>
                        <View style={styles.TextContainer}>
                            <Text style={styles.Title}>{data?.specialization}</Text>
                            <Text style={styles.Name}>{data?.doctorName}</Text>
                        </View>
                        <FastImage style={styles.Image} source={{ uri: data?.thumbnail != 'N/A' ? data?.thumbnail : lab ? 'https://aul.edu.ng/static/images/reviews/mls.jpg' : 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais' }} />
                    </View>
                    {
                        Reviews?.length == 0 ?
                            <View style={styles.EmptyContainer}>
                                <Text style={styles.EmptyText}>لا يوجد تقيمات </Text>
                            </View>
                            :
                            <List id={id} data={Reviews} />
                    }
                    <View style={styles.Fake} />
                </ScrollView>
            </View>
            {(countTrueKeys == 0 || Edit) && < Input id={id} index={(5 - index)} />}

        </SafeAreaView >
    )
}

export default ReviewScreen