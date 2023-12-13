import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { Colors } from 'theme/colors';
import FavouriteScreen from 'screens/App/Favourite';
import { ActiveHome, DeActiveHome, ActiveSearch, DeActiveSearch, ActiveSave, DeActiveSave, ActiveFavourite, DeActiveFavourite, DeActiveMore } from 'assets/svgs';
import BookmarkScreen from 'screens/App/Bookmark';
import HomeScreen from 'screens/App/Home/Main Home';
import SearchSreen from 'screens/App/Search';


const BottomTab = createBottomTabNavigator();


export default function BottomTabs(props: any) {

    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: Colors().white,
                tabBarInactiveTintColor: Colors().white,
                tabBarStyle: styles.tabBarStyle,
            })}>
            <BottomTab.Screen name={"Moree"} component={''} options={{
                title: '',
                tabBarIcon: () => (
                    <TouchableOpacity activeOpacity={.8} onPress={() => {
                        props.navigation.openDrawer();
                    }}>
                        <DeActiveMore />
                    </TouchableOpacity>
                )
            }}></BottomTab.Screen>

            <BottomTab.Screen name={"Favourite"} component={FavouriteScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (focused ? <ActiveFavourite /> : <DeActiveFavourite />)
            }}></BottomTab.Screen>

            <BottomTab.Screen name={"Home"} component={HomeScreen} options={{
                title: '',
                tabBarIcon: ({ focused, }) => (focused ? <ActiveHome /> : <DeActiveHome />)
            }}></BottomTab.Screen>

            <BottomTab.Screen name={"Search"} component={SearchSreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (focused ? <ActiveSearch /> : <DeActiveSearch />)
            }} ></BottomTab.Screen>

            <BottomTab.Screen name={"Save"} component={BookmarkScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (focused ? <ActiveSave /> : <DeActiveSave />)
            }}></BottomTab.Screen>

        </BottomTab.Navigator >
    );
}



