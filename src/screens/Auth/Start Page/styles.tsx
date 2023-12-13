import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 25,
        // alignItems: 'center'
    },
    Header: {
        fontSize: 32,
        fontWeight: '600',
        fontFamily: Fonts.Amiri,
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 20,
        color: Colors().primary
    },
    Welcome: {
        fontSize: 15,
        fontWeight: '400',
        fontFamily: Fonts.Messiri,
        color: Colors().lblack,
        textAlign: 'right',
        marginTop: 10
    },
    AppName: {
        fontSize: 22,
        fontWeight: '600',
        fontFamily: Fonts.Amiri,
        textAlign: 'right',
        color: Colors().primary
    },
    description: {
        fontSize: 14,
        fontFamily: Fonts.Messiri,
        fontWeight: '400',
        color: Colors().lblack,
        textAlign: 'right',
        marginTop: 5
    }
})