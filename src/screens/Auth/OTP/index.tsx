import React, { useEffect } from 'react'
import { Platform, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import Form from './components/Form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Back } from 'assets/svgs'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAppDispatch } from 'src/redux/store'
import AuthSlice from 'src/redux/auth'

const OTPScreen = () => {
    const { email, type }: any = useRoute().params
    const { goBack } = useNavigation<any>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(AuthSlice.changeIsSignedUp(false))
    }, [])


    return (
        <SafeAreaView style={styles.Container}>
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                extraScrollHeight={Platform.OS == 'android' ? -100 : -100}
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => { goBack() }} style={styles.Back}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.Header}>طبيبتي</Text>
                <Text style={styles.Title}>تأكيد الحساب</Text>
                <Text style={styles.SocialText}>إنشاء حساب يساعدك في البحث عن أقرب طبيبة أو{'\n'} معمل لك</Text>
                <Form email={email} type={type} />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default OTPScreen