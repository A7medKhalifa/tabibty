import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { ProfileBackground } from 'assets/images'
import LinearGradient from 'react-native-linear-gradient'
import Input from './components/Input'
import { ScrollView } from 'react-native'
import Header from 'components/Header'
import CustomButton from 'components/Button'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'src/redux/auth'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const { navigate } = useNavigation<any>()
    const USER = useSelector(selectCurrentUser)
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <ScrollView>
                <ImageBackground style={styles.ImageBackground} source={ProfileBackground}>
                    <View style={styles.opacityView}>
                        <LinearGradient style={styles.LinearGradient} colors={['#BC08AA', '#EE54DE',]} />
                        <View style={styles.HeaderContainer}>
                            <Header hasBack Title='الصفحة الشخصية' />
                        </View>
                    </View>
                </ImageBackground>
                <Image style={styles.Avatar} source={ProfileBackground} />

                <Text style={styles.USERNAME}>{USER?.fullname}</Text>
                <Text style={styles.Email}>{USER?.email}</Text>

                {/* <Input Title='العمر' Value={USER?.} /> */}
                <Input Title='الجنس' Value={USER?.gender} />
                <Input Title='المحافظة' Value={USER?.governorate} />
                <Input Title='المدينه' Value={USER?.city} />

                <CustomButton onPress={() => { navigate('EditProfile') }} style={styles.Button} title='تعديل' />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen