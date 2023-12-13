import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
    },
    ImageBackground: {
        height: 420,
        paddingHorizontal: 25
    },
    BackButton: {
        position: 'absolute',
        top: 10,
        left: 20,
        backgroundColor: Colors().white,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    },
    WhiteContainer: {
        height: '60%',
        backgroundColor: Colors().white,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 25,
        paddingHorizontal: 25,
    },
    FirstRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30
    },
    TextContainer: {
        alignItems: 'flex-end'
    },
    Title: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: Fonts.Messiri,
        color: Colors().lblack
    },
    Name: {
        fontSize: 21,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        color: Colors().lblack
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    RatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 38,
    },
    RateText: {
        fontWeight: '500',
        fontFamily: Fonts.Messiri,
        color: Colors().gray,
        marginLeft: 10
    },
    Rate: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: Fonts.Messiri,
        color: Colors().lblack,
        marginTop: 3,
        marginRight: 5
    },
    ButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    Button: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: Colors().border,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonText: {
        color: Colors().lblack,
        fontWeight: '600',
        fontFamily: Fonts.Messiri
    }
})

export default styles