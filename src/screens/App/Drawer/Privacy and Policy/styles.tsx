import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 20
    },
    Flatlist: {
        marginTop: 30
    },
    Row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        marginTop: 17
    },
    Text: {
        fontWeight: '500',
        fontFamily: Fonts.Messiri,
        color: Colors().gray,
        textAlign: 'right',
        width: '98%',
    },
    Dot: {
        height: 5,
        width: 5,
        borderRadius: 5,
        backgroundColor: Colors().gray,
        marginLeft: 5,
        marginTop: 8
    }
})

export default styles