import { Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white
    },
    Title: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        textAlign: 'center',
        marginBottom: 63,
        color: Colors().lblack
    },
    Header: {
        fontSize: 32,
        fontWeight: '600',
        fontFamily: Fonts.Amiri,
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 40,
        color: Colors().primary
    },
    InputsContainer: {
        paddingHorizontal: 25,
    },
    ForgetText: {
        fontFamily: Fonts.Messiri,
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'right',
        color: Colors().primary,
        marginTop: -5,
        marginBottom: 35
    },
    SocialText: {
        fontFamily: Fonts.Messiri,
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        color: '#8B8D97',
        marginBottom: 15,
        marginTop: 15
    },
    Regist: {
        color: Colors().primary,
        fontWeight: '500'
    },
    linearGradient: {
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
})