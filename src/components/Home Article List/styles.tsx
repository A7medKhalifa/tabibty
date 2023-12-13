import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    columnWrapperStyle: {
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    FlatList: {
        // direction: 'rtl',
        marginTop: 20,
    },
    invisible: {
        width: 110
    },
    Skeleton: {
        borderRadius: 14,
        backgroundColor: Colors().border,
        marginTop: 20
    }
})

export default styles