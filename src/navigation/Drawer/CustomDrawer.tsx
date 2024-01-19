
import React from 'react';
import { SafeAreaView, Text, Dimensions, View, TouchableOpacity,  } from 'react-native';
import { DrawerContentScrollView, } from '@react-navigation/drawer';
import { Back, ContactUs, LogOut, Privcy } from 'assets/svgs';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useAppDispatch } from 'src/redux/store';
import AuthSlice, { selectCurrentUser } from 'src/redux/auth';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';

const { height } = Dimensions.get("window")

const CustomSidebarMenu = (props: any) => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const USER = useSelector(selectCurrentUser)
    return (
        <SafeAreaView style={styles.Container}>
            <DrawerContentScrollView {...props}>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigate('Profile') }} style={styles.Row}>
                    <Back />
                    <FastImage source={{ uri: USER?.image?.secure_url }} style={styles.Avatar} />
                    <View style={{width:'100%',alignItems:'flex-start'}}>
                        <Text numberOfLines={1} style={styles.Name}>{USER?.fullname}</Text>
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