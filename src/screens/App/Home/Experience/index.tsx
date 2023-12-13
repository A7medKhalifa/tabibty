import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'


const ExperienceScreen = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header hasBack Title='الخبرات العملية' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ImageContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Title}>اسنان</Text>
                        <Text style={styles.Name}>د.دينا الحداد</Text>
                    </View>
                    <Image style={styles.Image} source={{ uri: 'https://aul.edu.ng/static/images/reviews/mls.jpg' }} />
                </View>
                <Text style={styles.description}>يقوم أطباء الأسنان بإزالة تسوس الأسنان، وملء التجاويف، وإصلاح الأسنان المكسورة. يقوم أطباء الأسنان بتشخيص وعلاج مشاكل أسنان المرضى ولثتهم والأجزاء ذات الصلة من الفم. أنها توفر المشورة والتعليمات بشأن العناية بالأسنان واللثة وعلى خيارات النظام الغذائي التي تؤثر على صحة الفم يقوم أطباء الأسنان بإزالة تسوس الأسنان، وملء التجاويف، وإصلاح الأسنان المكسورة. يقوم أطباء الأسنان بتشخيص وعلاج مشاكل أسنان المرضى ولثتهم والأجزاء ذات الصلة من الفم. أنها توفر المشورة والتعليمات بشأن العناية بالأسنان واللثة وعلى خيارات النظام الغذائي التي تؤثر على صحة الفم.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ExperienceScreen