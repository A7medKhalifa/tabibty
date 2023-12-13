import { Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors().white,
        // paddingHorizontal:22
    },
    LinearGradient: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        opacity: Platform.OS == 'ios' ? .5 : .4
    },
    ImageBackground: {
        height: 200,
        justifyContent: 'center',
    },
    opacityView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2a2a2a8a',
        justifyContent: 'center'
    },
    HeaderContainer: {
        paddingHorizontal: 22,
        marginBottom: 20
    },
    Avatar: {
        height: 190,
        width: 190,
        borderRadius: 100,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 5
    },
    CameraContainer: {
        height: 50,
        width: 50,
        borderRadius: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Email: {
        textAlign: 'center',
        marginTop: 15,
        color: Colors().gray,
        fontFamily: Fonts.Messiri,
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 40
    },
    InputContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingHorizontal: 22,
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    InputTitle: {
        color: Colors().gray,
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Messiri
    },
    Input: {
        height: 38,
        width: '80%',
        backgroundColor: Colors().white,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .8,
        borderColor: Colors().border,
        textAlign: 'right',
        paddingHorizontal: 15,
        color: Colors().lblack,
        fontFamily: Fonts.Messiri,
        fontWeight: '600'
    },
    Value: {
        fontWeight: '500',
        color: Colors().lblack,
        fontFamily: Fonts.Messiri
    },
    Button: {
        marginTop: 15,
        width: '90%',
        alignSelf: 'center'
    }
})

export default styles