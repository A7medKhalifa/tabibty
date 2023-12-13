import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 20,
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
    InputContainer: {
        width: '100%',
        height: 46,
        borderRadius: 8,
        marginVertical: 32,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: Colors().border
    },
    Input: {
        marginRight: 15,
        width: '90%',
        textAlign: 'right',
        height: '100%'
    },
    SearchText: {
        textAlign: 'right',
        fontSize: 16,
        fontFamily: Fonts.Messiri,
        color: Colors().gray
    }
})

export default styles