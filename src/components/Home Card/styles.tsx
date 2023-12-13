import { Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 160,
    },
    imageStyle: {
        borderRadius: 10,
    },
    Heart: {
        position: 'absolute',
        top: 10,
        right: 6,
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
        fontSize: 11,
        fontWeight: '600',
        color: Colors().white,
        fontFamily: Fonts.Messiri,
        height: 20,
    },
    Name: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors().white,
        fontFamily: Fonts.Messiri,
        height: 21,
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Rate: {
        fontSize: 9,
        fontWeight: '600',
        color: Colors().white,
        fontFamily: Fonts.Messiri,
        marginLeft: 5
    },
    LinearGradient: {
        height: Platform.OS == 'ios' ? 130 : 110,
        width: 110,
        position: 'absolute',
        bottom: 0,
        borderRadius: 10,
        opacity: Platform.OS == 'ios' ? 1 : .8
    }
})