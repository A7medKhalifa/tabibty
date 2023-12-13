import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { styles } from './styles'
import { ButtonLoading } from 'assets/lotties'

const CustomButton = ({
    title,
    onPress,
    style,
    loading
}: {
    title: string;
    onPress: () => void;
    style?: any
    loading?: boolean
}) => {
    return (

        <TouchableOpacity disabled={loading} activeOpacity={.8} onPress={onPress} style={[styles.linearGradient, style]}>
            {
                loading ?
                    <LottieView
                        source={ButtonLoading}
                        style={styles.loader}
                        autoPlay
                    />
                    :
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
            }
        </TouchableOpacity>

    )
}

export default CustomButton