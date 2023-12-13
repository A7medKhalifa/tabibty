import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackScreens from './Auth';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from 'screens/App/Home/Item Details';
import ExperienceScreen from 'screens/App/Home/Experience';
import ReviewScreen from 'screens/App/Home/Reviews';
import MoreAdviceScreen from 'screens/App/Home/More Advice';
import MoreScreen from 'screens/App/Home/More ';
import { selectIsAuth } from 'src/redux/auth';
import AppDrawer from './Drawer/Drawer';
import ContactUsScreen from 'screens/App/Drawer/Contact Us';
import PrivacyAndPolicyScreen from 'screens/App/Drawer/Privacy and Policy';
import ProfileScreen from 'screens/App/Drawer/Profile';
import EditProfileScreen from 'screens/App/Drawer/Edit Profile';

export type RootStack = {
    Splash: undefined;
    Auth: undefined;
    App: undefined;

    Details: undefined;
    Experience: undefined;
    Review: undefined;
    MoreAdvice: undefined;
    More: undefined;
    ContactUs: undefined;
    Privcy: undefined;
    Profile: undefined;
    EditProfile: undefined;
};

const RootStack = createNativeStackNavigator<RootStack>();

const RootStackScreens = () => {
    const [Splash, setSplash] = React.useState<boolean>(true)
    const IsAuth = useSelector(selectIsAuth)

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{ headerShown: false }
                }
                initialRouteName="Auth"
            >
                {/* {Splash && <RootStack.Screen name="Splash" component={SplashScreen} />} */}
                {
                    !IsAuth ?
                        <RootStack.Screen name="Auth" component={AuthStackScreens} />

                        :
                        <>
                            <RootStack.Screen name="App" component={AppDrawer} />

                            <RootStack.Screen name="Details" component={DetailScreen} />
                            <RootStack.Screen name="Experience" component={ExperienceScreen} />
                            <RootStack.Screen name="Review" component={ReviewScreen} />
                            <RootStack.Screen name="MoreAdvice" component={MoreAdviceScreen} />
                            <RootStack.Screen name="More" component={MoreScreen} />
                            <RootStack.Screen name="ContactUs" component={ContactUsScreen} />
                            <RootStack.Screen name="Privcy" component={PrivacyAndPolicyScreen} />
                            <RootStack.Screen name="Profile" component={ProfileScreen} />
                            <RootStack.Screen name="EditProfile" component={EditProfileScreen} />
                              </>
                }

            </RootStack.Navigator>
        </NavigationContainer>

    );
};

export default RootStackScreens;
