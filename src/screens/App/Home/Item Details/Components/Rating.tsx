import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles';
import { EmptyStar, Star } from 'assets/svgs';

const Rating = ({
    maxRating,
    setDefaultRating,
    defaultRating
}: {
    maxRating?: any;
    setDefaultRating?: any
    defaultRating?: any;
}) => {
    return (
        <View style={styles.customRatingBarStyle}>
            {maxRating?.map((item: any, key: any) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={() => setDefaultRating(key)}>
                        {item <= defaultRating ? <EmptyStar style={{ marginLeft: 4 }} /> : <Star style={{ marginLeft: 4 }} width="21" height="22" />}
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

export default Rating