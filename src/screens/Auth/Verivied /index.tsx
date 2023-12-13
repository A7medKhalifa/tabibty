import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { Verivied } from 'assets/svgs'
import CustomButton from 'components/Button'

const VeriviedScreen = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Header}>طبيبتي</Text>
            <Text style={styles.Title}>تم تأكيد حسابك بنجاح</Text>
            <Verivied />
            <CustomButton style={{ marginTop: 100 }} title="الرئيسية" onPress={() => { }} />
        </SafeAreaView>
    )
}

export default VeriviedScreen