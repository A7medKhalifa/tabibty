import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    Image:{
        height: '100%',
        width: '100%'
    },
    back:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 20,
        zIndex: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
    }
})