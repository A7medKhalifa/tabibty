import { Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 135,
        marginBottom: 17
    },
    imageStyle: {
        borderRadius: 10,
    },
    Heart: {
        position: 'absolute',
        top: 10,
        left: 15,
        zIndex: 100
    },
    TextContainer: {
        height: '38%',
        alignItems: 'flex-end',
        width: '100%',
        bottom: 0,
        position: 'absolute',
        zIndex: 100,
        paddingHorizontal: 7
    },
    Title: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors().white,
        fontFamily: Fonts.Messiri,
        height: 20,
        textAlign: 'right'
    },
    Name: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors().white,
        fontFamily: Fonts.Messiri,
        height: 21,
        textAlign: 'right'
    },
    LinearGradient: {
        height: Platform.OS == 'ios' ? 130 : 100,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderRadius: 10,
        opacity: Platform.OS == 'ios' ? 1 : .8
    }
})