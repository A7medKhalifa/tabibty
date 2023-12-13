import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        paddingHorizontal: 20
    },
    ImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 35
    },
    TextContainer: {
        alignItems: 'flex-end'
    },
    Title: {
        fontSize: 16,
        fontFamily: Fonts.Messiri,
        fontWeight: '500',
        color: Colors().lblack
    },
    Name: {
        fontSize: 21,
        fontFamily: Fonts.Messiri,
        fontWeight: '600',
        color: Colors().lblack
    },
    Image: {
        height: 65,
        width: 65,
        borderRadius: 115,
        backgroundColor: '#f00',
        marginLeft: 15
    },
    description: {
        textAlign: 'right',
        marginTop: 45,
        fontFamily: Fonts.Messiri,
        fontWeight: '400',
        color: Colors().gray
    }
})

export default styles