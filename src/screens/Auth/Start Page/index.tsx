import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { StartIcon } from 'assets/svgs'
import CustomButton from 'components/Button'

const StartPageScreen = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Header}>طبيبتي</Text>
            <StartIcon style={{ alignSelf: 'center' }} />
            <Text style={styles.Welcome}>مرحبًا بكِ في <Text style={styles.AppName}>طبيبتي</Text></Text>
            <Text style={styles.description}>نساعدك في البحث عن أقرب طبيبة قريبة منكِ، لجعل زيارتك أكثر راحة وآمان.</Text>
            <CustomButton style={{ marginTop: 40 }} title="البحث عن طبيبة" onPress={() => { }} />

        </SafeAreaView>
    )
}

export default StartPageScreen