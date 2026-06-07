import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedScreen from '../../screens/OnboardingScreens/GetStartedScreen';
import LoginScreen from '../../screens/OnboardingScreens/LoginScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GetStarted" component={GetStartedScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
};

export default function OnboardingStack() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}