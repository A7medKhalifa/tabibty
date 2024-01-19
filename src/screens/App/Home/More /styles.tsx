import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 22
    },
    EmptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    EmptyText: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: Fonts.Messiri,
        color: Colors().gray,
        marginTop: -50
    },
})

export default styles