import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Arrow } from 'assets/svgs'
import styles from '../styles'

const MoreHeader = ({
    onPress,
    title,
    hasMore,
}: {
    onPress?: any;
    title?: string;
    hasMore?: boolean;
}) => {
    return (
        <View style={styles.RowBetween}>
            {hasMore ? <TouchableOpacity activeOpacity={.8} onPress={onPress} style={styles.Row}>
                <Arrow />
                <Text style={styles.MoreText}>المزيد</Text>
            </TouchableOpacity>
                :
                <View />
            }
            <Text style={styles.MoreHeader}>{title}</Text>
        </View>
    )
}

export default MoreHeader