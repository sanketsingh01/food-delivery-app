import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import FoodItemsList from '../../components/FoodItemsList';

const ACCENT = '#FFC529';

const HomeScreen = () => {
    const ListHeader = () => (
        <View>
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hello, Foodie 👋</Text>
                    <Text style={styles.title}>Let&apos;s eat{"\n"}Quality food 😋</Text>
                </View>
                <Pressable style={styles.avatar}>
                    <Ionicons name="notifications-outline" size={22} color="#151515" />
                </Pressable>
            </View>

            {/* Search bar */}
            {/* <View style={styles.searchBar}>
                <Ionicons name="search" size={20} color="#9A9A9A" />
                <Text style={styles.searchPlaceholder}>Search for your cravings...</Text>
            </View> */}

            {/* Promo banner */}
            <View style={styles.banner}>
                <View style={styles.bannerTextWrap}>
                    <Text style={styles.bannerTag}>LIMITED TIME</Text>
                    <Text style={styles.bannerTitle}>Get 30% OFF{"\n"}your first order</Text>
                    <Pressable style={styles.bannerButton}>
                        <Text style={styles.bannerButtonText}>Order Now</Text>
                    </Pressable>
                </View>
                <Image source={require('../../assets/cheflogo.png')} style={styles.bannerImage} />
            </View>

            <View style={styles.sectionRow}>
                <Text style={styles.sectionTitle}>Popular Now</Text>
                <Pressable>
                    <Text style={styles.seeAll}>See all</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <FoodItemsList ListHeaderComponent={ListHeader} />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faeece',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 12,
    },
    greeting: {
        fontSize: 14,
        fontWeight: '600',
        color: '#8A7E5E',
        marginBottom: 4,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#151515',
        lineHeight: 32,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 2,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginTop: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
    },
    searchPlaceholder: {
        color: '#9A9A9A',
        fontSize: 14,
        fontWeight: '500',
    },
    banner: {
        flexDirection: 'row',
        backgroundColor: ACCENT,
        borderRadius: 24,
        marginTop: 18,
        paddingLeft: 20,
        paddingVertical: 18,
        overflow: 'hidden',
        alignItems: 'center',
        shadowColor: '#E6A900',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
    },
    bannerTextWrap: {
        flex: 1,
    },
    bannerTag: {
        fontSize: 11,
        fontWeight: '800',
        color: '#151515',
        opacity: 0.7,
        letterSpacing: 1,
        marginBottom: 6,
    },
    bannerTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#151515',
        lineHeight: 26,
        marginBottom: 14,
    },
    bannerButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#151515',
        paddingHorizontal: 18,
        paddingVertical: 9,
        borderRadius: 12,
    },
    bannerButtonText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '700',
    },
    bannerImage: {
        width: 120,
        height: 130,
        resizeMode: 'contain',
        marginRight: -6,
    },
    sectionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#151515',
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '700',
        color: '#C29A1E',
    },
})
