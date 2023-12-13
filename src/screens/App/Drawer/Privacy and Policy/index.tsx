import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import { FlatList } from 'react-native'

const PrivacyAndPolicyScreen = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <Header hasBack Title='السياسيات والخصوصية' />
            <FlatList
                data={[{}, {}, {}, {}]}
                style={styles.Flatlist}
                renderItem={() => {
                    return (
                        <>
                            <View style={styles.Row}>
                                <Text style={styles.Text}>لا يتحمل التطبيق مسؤلية تقسم المستخدمين للطبيبات، فهو رأيهم الخاص ولا يعبر عن راي القائمين على التطبيق</Text>
                                <View style={styles.Dot} />
                            </View>
                        </>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default PrivacyAndPolicyScreen