import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/MainScreens/HomeScreen";
import SearchScreen from "../../screens/MainScreens/SearchScreen";
import OrdersScreen from "../../screens/MainScreens/OrdersScreen";
import ProfileScreen from "../../screens/MainScreens/ProfileScreen";

import { Ionicons } from '@expo/vector-icons';
import { useCart } from "../../context/CartContext";

const Tabs = createBottomTabNavigator();

export default function MainTabs() {
    const { totalCount } = useCart();
    return (
        // style the Ui of the bottom Tabs in yeelow and minimalist style
        <Tabs.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#ef522f', tabBarInactiveTintColor: '#000000', tabBarStyle: { backgroundColor: '#ffe18d' } }}>
            <Tabs.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />
            }} />
            <Tabs.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} />
            }} />
            <Tabs.Screen name="Orders" component={OrdersScreen} options={{
                tabBarBadge: totalCount > 0 ? totalCount : undefined,
                tabBarBadgeStyle: { backgroundColor: '#f34f21' },
                tabBarIcon: ({ color }) => <Ionicons name="cart-outline" size={24} color={color} />
            }} />
            <Tabs.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
            }} />
        </Tabs.Navigator>
    )
};