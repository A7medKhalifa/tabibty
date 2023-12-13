import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 25,
        alignItems: 'center'
    },
    Title: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        textAlign: 'center',
        marginBottom: 100,
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
})