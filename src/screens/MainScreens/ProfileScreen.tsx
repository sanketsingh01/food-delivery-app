import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ACCENT = '#FFC52C';

type MenuItem = {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
};

const MENU: MenuItem[] = [
    { icon: 'person-outline', label: 'Edit Profile' },
    { icon: 'receipt-outline', label: 'My Orders' },
    { icon: 'location-outline', label: 'Delivery Address' },
    { icon: 'card-outline', label: 'Payment Methods' },
    { icon: 'settings-outline', label: 'Settings' },
    { icon: 'help-circle-outline', label: 'Help & Support' },
];

const ProfileScreen = () => {
    const navigation = useNavigation<any>();

    const handleLogout = () => {
        navigation.getParent()?.reset({
            index: 0,
            routes: [{ name: 'Auth' }],
        });
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                <Text style={styles.heading}>Profile</Text>

                <View style={styles.profileCard}>
                    <Image source={require('../../assets/cheflogo.png')} style={styles.avatar} />
                    <Text style={styles.name}>Sanket Singh</Text>
                    <Text style={styles.email}>sanketxcodes@gmail.com</Text>
                    <Pressable style={styles.editBtn}>
                        <Ionicons name="create-outline" size={16} color="#151515" />
                        <Text style={styles.editBtnText}>Edit</Text>
                    </Pressable>
                </View>

                <View style={styles.menu}>
                    {MENU.map((item, index) => (
                        <Pressable
                            key={item.label}
                            style={({ pressed }) => [
                                styles.menuRow,
                                index !== MENU.length - 1 && styles.menuRowBorder,
                                pressed && styles.menuRowPressed,
                            ]}
                        >
                            <View style={styles.menuIcon}>
                                <Ionicons name={item.icon} size={20} color="#151515" />
                            </View>
                            <Text style={styles.menuLabel}>{item.label}</Text>
                            <Ionicons name="chevron-forward" size={18} color="#B5B5B5" />
                        </Pressable>
                    ))}
                </View>

                <Pressable
                    style={({ pressed }) => [styles.logoutBtn, pressed && styles.logoutBtnPressed]}
                    onPress={handleLogout}
                >
                    <Ionicons name="log-out-outline" size={20} color="#E2452F" />
                    <Text style={styles.logoutText}>Log Out</Text>
                </Pressable>

                <Text style={styles.version}>Version 1.0.0</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faeece',
    },
    content: {
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
    heading: {
        fontSize: 26,
        fontWeight: '800',
        color: '#151515',
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 20,
    },
    profileCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#faeece',
        resizeMode: 'contain',
    },
    name: {
        fontSize: 20,
        fontWeight: '800',
        color: '#151515',
        marginTop: 12,
    },
    email: {
        fontSize: 14,
        fontWeight: '500',
        color: '#9A9A9A',
        marginTop: 4,
    },
    editBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: ACCENT,
        paddingHorizontal: 18,
        paddingVertical: 9,
        borderRadius: 12,
        marginTop: 16,
    },
    editBtnText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#151515',
    },
    menu: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        marginTop: 18,
        paddingHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 2,
    },
    menuRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 10,
    },
    menuRowBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0EAD9',
    },
    menuRowPressed: {
        opacity: 0.6,
    },
    menuIcon: {
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: '#FBF4E2',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    menuLabel: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        color: '#151515',
    },
    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingVertical: 16,
        marginTop: 18,
        borderWidth: 1,
        borderColor: '#F6D9D2',
    },
    logoutBtnPressed: {
        opacity: 0.7,
    },
    logoutText: {
        fontSize: 15,
        fontWeight: '800',
        color: '#E2452F',
    },
    version: {
        textAlign: 'center',
        color: '#B0A88F',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 18,
    },
});
