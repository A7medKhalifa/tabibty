import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 20,
    },
    TapsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 40,
    },
    Tap1: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        color: Colors().primary,
    },
    Tap2: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        marginRight: 30
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
    columnWrapperStyle: {
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    FlatList: {
        // direction: 'rtl',
        marginTop: 20,
    },
    invisible: {
        width: 110
    }
})

export default styles