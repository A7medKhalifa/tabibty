import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    tabBarIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors().Red,
        padding: 10,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    tabBarStyle: {
        backgroundColor: Colors().white,
        height: 90,
        borderTopColor: Colors().border,
        borderTopWidth: .8,
        paddingTop: Platform.OS == 'ios' ? 25 : 0
    },
});

export default styles