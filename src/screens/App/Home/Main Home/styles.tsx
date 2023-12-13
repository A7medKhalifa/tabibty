import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 22
    },
    Header: {
        fontSize: 32,
        fontWeight: '600',
        fontFamily: Fonts.Amiri,
        textAlign: 'center',
        marginBottom: 10,
        color: Colors().primary
    },
    RowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    MoreText: {
        fontSize: 13,
        fontWeight: '500',
        color: Colors().gray,
        fontFamily: Fonts.Messiri,
        marginLeft: 3
    },
    MoreHeader: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors().lblack,
        fontFamily: Fonts.Messiri
    }
})

export default styles