import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 25,
    },
    Back: {
        position: 'absolute',
        top: 20,
        left: 0,
    },
    Title: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        textAlign: 'center',
        marginBottom: 10,
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
    SocialText: {
        fontFamily: Fonts.Messiri,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        color: '#8B8D97',
        marginBottom: 30,
        lineHeight: 18
    },
    cellRoot: {
        width: 50,
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: Colors().primary,
        borderBottomWidth: 2.5,
        alignSelf: 'center',
    },
    focusCell: {
        borderColor: Colors().primary,
        borderWidth: 2,
    },
    cellText: {
        color: '#000',
        fontSize: 36,
        textAlign: 'center',
    },
    ResentText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#8B8D97',
        fontFamily: Fonts.Messiri,
        textAlign: 'right',
        // marginHorizontal: 20,
        marginTop: 20
    },
    Resend: {
        color: Colors().primary,
        fontWeight: '500'
    }
})