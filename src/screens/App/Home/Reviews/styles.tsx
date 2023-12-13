import { Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
    },
    secContainer: {
        paddingHorizontal: 20,
        flex: 1
    },
    Separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#C9CACF',
        marginVertical: 18
    },
    ImageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    TextContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    Title: {
        fontSize: 16,
        fontFamily: Fonts.Messiri,
        textAlign: 'right',
        fontWeight: '500',
        color: Colors().lblack
    },
    Name: {
        fontSize: 21,
        fontFamily: Fonts.Messiri,
        fontWeight: '600',
        textAlign: 'right',
        color: Colors().lblack
    },
    Image: {
        height: 65,
        width: 65,
        borderRadius: 115,
        backgroundColor: '#f00',
        marginLeft: 15
    },
    Image2: {
        height: 50,
        width: 50,
        borderRadius: 115,
        backgroundColor: '#f00',
        marginLeft: 15
    },
    RaterName: {
        fontSize: 14,
        fontFamily: Fonts.Messiri,
        fontWeight: '500',
        color: Colors().lblack,
        textAlign: 'right',
        marginBottom: 5,
        marginLeft: 10
    },
    Ratedescription: {
        fontSize: 12,
        fontFamily: Fonts.Messiri,
        fontWeight: '500',
        color: Colors().lblack,
        textAlign: 'right',
        width: '55%',
    },
    Date: {
        color: Colors().gray
    },
    Star: {
        marginLeft: 4
    },
    Fake: {
        height: 30
    },
    bottom: {
        height: Platform.OS == 'ios' ? 80 : 70,
        width: '100%',
        // backgroundColor: '#f00',
        paddingHorizontal: 20
    },
    InputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderWidth: 1.4,
        borderColor: Colors().border,
        borderRadius: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#fff'
    },
    TextInput: {
        width: '91%',
        textAlign: 'right',
        height: '100%',
        fontWeight: '600',
        fontFamily: Fonts.Messiri
    }
})

export default styles