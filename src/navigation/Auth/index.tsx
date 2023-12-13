import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from 'screens/Auth';
import RegistScreen from 'screens/Auth/Registeration';
import ForgetPasswordScreen from 'screens/Auth/Forget Password';
import OTPScreen from 'screens/Auth/OTP';
import ResetPasswordScreen from 'screens/Auth/Reset Password';

export type AuthStack = {
    Login: undefined;
    Regist: undefined;
    ForgetPassword: undefined;
    OTP: undefined;
    ResetPassword: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStack>();

const AuthStackScreens = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }
            }
            initialRouteName="Login"
        >
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Regist" component={RegistScreen} />
            <AuthStack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
            <AuthStack.Screen name="OTP" component={OTPScreen} />
            <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthStackScreens;
