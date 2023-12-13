import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
    },
    Title: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        color: Colors().lblack
    }
})