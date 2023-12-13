import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles'
import { Colors } from 'theme/colors'
import { Send } from 'assets/svgs'

const Input = () => {
    return (
        <View style={styles.bottom}>
            <View style={styles.InputContainer}>
                <Send />
                <TextInput
                    placeholder='أضافة تعليق'
                    placeholderTextColor={Colors().gray}
                    style={styles.TextInput}
                />
            </View>
        </View>
    )
}

export default Input