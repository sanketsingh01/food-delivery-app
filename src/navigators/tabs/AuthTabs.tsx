import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LoginScreen from '../../screens/OnboardingScreens/LoginScreen';
import SignupScreen from '../../screens/OnboardingScreens/SignupScreen';

const Tab = createMaterialTopTabNavigator();

const AuthTabs = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/cheflogo.png')}
                />
                <Text style={styles.appName}>Hunger Station</Text>
                <Text style={styles.appTagline}>Delivery App</Text>
            </View>

            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: styles.tabLabel,
                    tabBarActiveTintColor: '#151515',
                    tabBarInactiveTintColor: '#9A9A9A',
                    tabBarIndicatorStyle: styles.tabIndicator,
                    tabBarStyle: styles.tabBar,
                    tabBarPressColor: 'transparent',
                }}
            >
                <Tab.Screen name="Login" component={LoginScreen} />
                <Tab.Screen name="Signup" component={SignupScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

export default AuthTabs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        paddingBottom: 8,
        gap: 2,
    },
    logo: {
        width: 210,
        height: 160,
        resizeMode: 'contain',
    },
    appName: {
        fontSize: 28,
        fontWeight: '800',
        color: '#151515',
    },
    appTagline: {
        fontSize: 14,
        fontWeight: '600',
        color: '#B0B0B0',
    },
    tabLabel: {
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'none',
    },
    tabIndicator: {
        backgroundColor: '#FFC529',
        height: 3,
        borderRadius: 3,
    },
    tabBar: {
        backgroundColor: '#FFFFFF',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
});
