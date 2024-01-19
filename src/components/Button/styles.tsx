import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    linearGradient: {
        height: 49,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors().primary,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 18,
        fontFamily: Fonts.Messiri,
        textAlign: 'center',
        fontWeight: '600'
    },
    loader: {
        height: 32,
        width: 100
    }
})