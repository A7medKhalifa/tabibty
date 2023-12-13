import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Back } from 'assets/svgs'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Header = ({
    hasBack,
    Title
}: {
    hasBack?: boolean
    Title?: string
}) => {
    const { goBack } = useNavigation<any>()
    return (
        <View style={styles.container}>
            {
                hasBack ?
                    <TouchableOpacity activeOpacity={.8} onPress={() => { goBack() }}>
                        <Back />
                    </TouchableOpacity>
                    :
                    <View style={{ width: 13 }} />
            }
            <Text style={styles.Title}>{Title}</Text>
            <View style={{ width: 13 }} />
        </View>
    )
}

export default Header