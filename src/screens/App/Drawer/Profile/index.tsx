import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { ProfileBackground } from 'assets/images'
import LinearGradient from 'react-native-linear-gradient'
import Input from './components/Input'
import { ScrollView } from 'react-native'
import Header from 'components/Header'
import CustomButton from 'components/Button'
import { useSelector } from 'react-redux'
import AuthSlice, { selectCurrentUser } from 'src/redux/auth'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from 'store/store'
import AuthThunks from 'store/auth/thunks'
import ViewImageModal from 'components/Image Modal'
import FastImage from 'react-native-fast-image'

const ProfileScreen = () => {
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const USER = useSelector(selectCurrentUser)
    const [visible, setVisable] = React.useState(false)
    useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(AuthSlice.changeIsSignedUp(false))
            dispatch(AuthThunks.doGetProfile())
        })
        return RenderFunction
    }, [navigation])
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <ViewImageModal image={USER?.image?.secure_url == 'default' ? 'https://img.freepik.com/vecteurs-premium/femme-bande-dessinee-avatar-blonde_8462-3.jpg' : USER?.image?.secure_url} visible={visible} setVisable={setVisable} />
            <ScrollView>
                <FastImage style={styles.ImageBackground} source={ProfileBackground}>
                    <View style={styles.opacityView}>
                        <LinearGradient style={styles.LinearGradient} colors={['#BC08AA', '#EE54DE',]} />
                        <View style={styles.HeaderContainer}>
                            <Header hasBack Title='الصفحة الشخصية' />
                        </View>
                    </View>
                </FastImage>

                <TouchableOpacity onPress={() => setVisable(true)} activeOpacity={.8}>
                    <FastImage style={styles.Avatar} source={{ uri: USER?.image?.secure_url == 'default' ? 'https://img.freepik.com/vecteurs-premium/femme-bande-dessinee-avatar-blonde_8462-3.jpg' : USER?.image?.secure_url }} />
                </TouchableOpacity>

                <Text style={styles.USERNAME}>{USER?.fullname}</Text>
                <Text style={styles.Email}>{USER?.email}</Text>

                <Input Title='المحافظة' Value={USER?.governorate?.governorate_name_ar} />
                <Input Title='المدينه' Value={USER?.city?.city_name_ar} />

                <CustomButton onPress={() => { navigation.navigate('EditProfile') }} style={styles.Button} title='تعديل' />
                <Text onPress={() => navigation.navigate('ChangePassword')} style={styles.EditPassword}>تعديل كلمه المرور</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen