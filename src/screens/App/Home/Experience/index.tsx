import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import FastImage from 'react-native-fast-image'
import { selectDetails } from 'store/app'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'


const ExperienceScreen = () => {
    const { lab }: any = useRoute().params
    const data = useSelector(selectDetails)
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header hasBack Title='الخبرات العملية' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.ImageContainer, { marginVertical: 38, alignItems: 'center' }]}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Title}>{data?.specialization}</Text>
                        <Text style={styles.Name}>{data?.doctorName}</Text>
                    </View>
                    <FastImage style={styles.Image} source={{ uri: data?.thumbnail != 'N/A' ? data?.thumbnail : lab ? 'https://aul.edu.ng/static/images/reviews/mls.jpg' : 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais' }} />
                </View>
                <Text style={styles.description}>يقوم أطباء الأسنان بإزالة تسوس الأسنان، وملء التجاويف، وإصلاح الأسنان المكسورة. يقوم أطباء الأسنان بتشخيص وعلاج مشاكل أسنان المرضى ولثتهم والأجزاء ذات الصلة من الفم. أنها توفر المشورة والتعليمات بشأن العناية بالأسنان واللثة وعلى خيارات النظام الغذائي التي تؤثر على صحة الفم يقوم أطباء الأسنان بإزالة تسوس الأسنان، وملء التجاويف، وإصلاح الأسنان المكسورة. يقوم أطباء الأسنان بتشخيص وعلاج مشاكل أسنان المرضى ولثتهم والأجزاء ذات الصلة من الفم. أنها توفر المشورة والتعليمات بشأن العناية بالأسنان واللثة وعلى خيارات النظام الغذائي التي تؤثر على صحة الفم.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ExperienceScreen