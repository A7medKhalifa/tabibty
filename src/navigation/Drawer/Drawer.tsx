import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from './CustomDrawer';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from 'theme/colors';
import { ContactUs } from 'assets/svgs';
import FavouriteScreen from 'screens/App/Favourite';
import HomeScreen from 'screens/App/Home/Main Home';
import BottomTabs from '../BottomTab/MainBottomTabs';
import styles from './styles';

const Drawer = createDrawerNavigator();



export default function AppDrawer(props: any) {


    return (
        <Drawer.Navigator

            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: Colors().black,
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#545454',
                drawerLabelStyle: styles.drawerLabelStyle,
                drawerPosition: 'left'
            }}
            drawerContent={props => <CustomSidebarMenu {...props} />}
        >
            <>
                <Drawer.Screen
                    name="الصفحه الرئيسية"
                    component={BottomTabs}
                />
            </>



        </Drawer.Navigator>
    );
}