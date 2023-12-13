import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 20
    },
    TapsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 40,
    },
    Title: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        color: Colors().lblack,
        textAlign: 'right',
        marginTop: 20
    },
    FlatList: {
        marginTop: 10,
    },
    invisible: {
        width: 110
    }
})

export default styles