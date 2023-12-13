import React from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import List from './components/List'
import Input from './components/Input'


const ReviewScreen = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <View style={styles.secContainer}>
                <Header hasBack Title='التقيمات' />
                <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    <View style={[styles.ImageContainer, { marginVertical: 38, alignItems: 'center' }]}>
                        <View style={styles.TextContainer}>
                            <Text style={styles.Title}>اسنان</Text>
                            <Text style={styles.Name}>د.دينا الحداد</Text>
                        </View>
                        <Image style={styles.Image} source={{ uri: 'https://aul.edu.ng/static/images/reviews/mls.jpg' }} />
                    </View>
                    <List data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {},]} />
                    <View style={styles.Fake} />
                </ScrollView>
            </View>
            <Input />
        </SafeAreaView>
    )
}

export default ReviewScreen