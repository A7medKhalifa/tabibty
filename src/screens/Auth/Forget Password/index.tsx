import { Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from './components/Form'
import { styles } from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native'
import { Back } from 'assets/svgs'
import { useNavigation } from '@react-navigation/native'

const ForgetPasswordScreen = () => {
    const { goBack } = useNavigation<any>()
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
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
                <Text style={styles.Title}>كلمة السر</Text>
                <Text style={styles.SocialText}>لا عليكِ، أدخلي بريدك الألكتروني لأرسال كلمة سر جديدة</Text>
                <Form />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ForgetPasswordScreen