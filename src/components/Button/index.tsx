import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { styles } from './styles'
import { ButtonLoading } from 'assets/lotties'
import { Colors } from 'theme/colors'

const CustomButton = ({
    title,
    onPress,
    style,
    loading,
    notFill
}: {
    title: string;
    onPress?: () => void;
    style?: any;
    loading?: boolean;
    notFill?: boolean;
}) => {
    return (

        <TouchableOpacity disabled={loading} activeOpacity={.8} onPress={onPress} style={[styles.linearGradient, { backgroundColor: notFill ? Colors().white : Colors().primary }, style]}>
            {
                loading ?
                    <LottieView
                        source={ButtonLoading}
                        style={styles.loader}
                        autoPlay
                    />
                    :
                    <Text style={[styles.buttonText, { color: notFill ? Colors().primary : Colors().white }]}>
                        {title}
                    </Text>
            }
        </TouchableOpacity>

    )
}

export default CustomButton