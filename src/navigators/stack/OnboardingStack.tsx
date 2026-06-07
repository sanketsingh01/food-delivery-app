import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedScreen from '../../screens/OnboardingScreens/GetStartedScreen';
import AuthTabs from '../tabs/AuthTabs';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GetStarted" component={GetStartedScreen} />
            <Stack.Screen name="Auth" component={AuthTabs} />
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
