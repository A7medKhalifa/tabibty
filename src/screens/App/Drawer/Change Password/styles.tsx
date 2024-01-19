import { StyleSheet } from "react-native";
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
        marginBottom: 10,
        color: Colors().lblack
    },
    Back: {
        position: 'absolute',
        top: 20,
        left: 25,
    },
    Header: {
        fontSize: 32,
        fontWeight: '600',
        fontFamily: Fonts.Amiri,
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 50,
        color: Colors().primary
    },
    InputsContainer: {
        paddingHorizontal: 25,
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
})