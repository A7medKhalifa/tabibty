import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { Colors } from 'theme/colors'

const Taps = ({
    index,
    setIndex
}: {
    index?: number,
    setIndex?: any
}) => {
    return (
        <View style={styles.TapsContainer}>
            <TouchableOpacity activeOpacity={.8} onPress={() => setIndex(1)} >
                <Text style={[styles.Tap2, { color: index == 1 ? Colors().primary : Colors().gray }]}>المعامل</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.8} onPress={() => setIndex(0)} >
                <Text style={[styles.Tap1, { color: index == 0 ? Colors().primary : Colors().gray }]}>الطبيبات</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Taps