import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 20
    },
    Text: {
        fontWeight: '500',
        fontFamily: Fonts.Messiri,
        color: Colors().gray,
        textAlign: 'right',
        marginTop: 40
    },
    InputsContainer: {
        marginTop: 20
    },
})

export default styles