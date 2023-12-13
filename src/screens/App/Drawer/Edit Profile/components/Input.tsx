import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles'
import { Colors } from 'theme/colors'

const Input = ({
    Title,
    Value
}: {
    Title?: string
    Value?: string
}) => {
    return (
        <View style={styles.InputContainer}>
            <Text style={styles.InputTitle}>{Title}</Text>
            <TextInput
                value={Value}
                placeholder='Title'
                placeholderTextColor={Colors().gray}
                style={styles.Input}
            />
        </View>
    )
}

export default Input