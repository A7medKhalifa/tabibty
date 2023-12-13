import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'

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
            <View style={styles.Input}>
                <Text style={styles.Value}>{Value}</Text>
            </View>
        </View>
    )
}

export default Input