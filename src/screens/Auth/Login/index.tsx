import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from './components/Form'
import { styles } from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAppDispatch } from 'src/redux/store'
import AuthSlice from 'src/redux/auth'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    React.useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(AuthSlice.changeIsSignedUp(false))
            dispatch(AuthSlice.changeIsVerivied(false))
            dispatch(AuthSlice.changeIsVerivied2(false))
        })
        return RenderFunction
    }, [navigation])

    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                extraScrollHeight={Platform.OS == 'android' ? -100 : -100}
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <Form />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen