import { StyleSheet } from "react-native"
import { Colors } from "theme/colors"


const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    HomeCard: {
        marginBottom: 15,
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