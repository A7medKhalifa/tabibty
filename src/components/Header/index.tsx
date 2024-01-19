import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Back } from 'assets/svgs'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import AppSlice from 'store/app'
import { useAppDispatch } from 'store/store'

const Header = ({
    hasBack,
    Title
}: {
    hasBack?: boolean
    Title?: string
}) => {
    const dispatch = useAppDispatch()
    const { goBack } = useNavigation<any>()
    return (
        <View style={styles.container}>
            {
                hasBack ?
                    <TouchableOpacity activeOpacity={.8} onPress={() => {
                        goBack()
                        dispatch(AppSlice.changeEdit(undefined))
                    }}>
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