import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    drawerLabelStyle: {
        fontSize: 17,
        height: 25,
        justifyContent: 'center',
        marginTop: 5,
        marginRight: -20,
        fontWeight: '700',
        textAlign: 'right'
    },
    Container:
    {
        flex: 1,
        width: '88%',
        alignSelf: 'center',
        marginTop: Platform.OS == 'ios' ? -20 : 50,
        height:'100%',
        // backgroundColor:'#f00'
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Avatar: {
        height: 40,
        width: 40,
        borderRadius: 38,
        marginHorizontal: 15
    },
    Name: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.Messiri,
        color: Colors().lblack
    },
    Profile: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: Fonts.Messiri,
        color: Colors().gray
    },
    Divider: {
        width: '70%',
        height: 2,
        backgroundColor: Colors().gray,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    Logout:{
        position: 'absolute',
        bottom: 40,
        right: 5
    }
});

export default styles