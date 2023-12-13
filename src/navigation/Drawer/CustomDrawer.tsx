
import React from 'react';
import { SafeAreaView, Text, Dimensions, View, TouchableOpacity, Image, } from 'react-native';
import { DrawerContentScrollView, } from '@react-navigation/drawer';
import { ProfileBackground } from 'assets/images';
import { Back, ContactUs, LogOut, Privcy } from 'assets/svgs';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useAppDispatch } from 'src/redux/store';
import AuthSlice from 'src/redux/auth';

const { height } = Dimensions.get("window")

const CustomSidebarMenu = (props: any) => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    return (
        <SafeAreaView style={styles.Container}>
            <DrawerContentScrollView {...props}>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigate('Profile') }} style={styles.Row}>
                    <Back />
                    <Image source={ProfileBackground} style={styles.Avatar} />
                    <View>
                        <Text style={styles.Name}>احمد خليفه</Text>
                        <Text style={styles.Profile}>الملف الشخصي</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.Divider} />
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigate('ContactUs') }} >
                    <ContactUs style={{ marginBottom: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigate('Privcy') }} >
                    <Privcy />
                </TouchableOpacity>



            </DrawerContentScrollView>
            <TouchableOpacity style={styles.Logout} activeOpacity={.8} onPress={() => {
                dispatch(AuthSlice.logout())
            }} >
                <LogOut />
            </TouchableOpacity>
        </SafeAreaView>
    );
};



export default CustomSidebarMenu;