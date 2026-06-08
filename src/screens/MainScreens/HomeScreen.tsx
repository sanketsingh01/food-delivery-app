import { StyleSheet, Text, View, useWindowDimensions, FlatList, Image, Pressable } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { foodItems } from '../data/FoodItemsData';

const ACCENT = '#FFC529';
const H_PADDING = 16;
const GAP = 14;

const HomeScreen = () => {
    const { width } = useWindowDimensions();

    const isTablet = width >= 768;
    const numColumns = isTablet ? 3 : 2;
    const cardWidth = (width - H_PADDING * 2 - GAP * (numColumns - 1)) / numColumns;

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
            <FlatList
                key={isTablet ? 'tablet-list' : 'phone-list'}
                data={foodItems}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeader}
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={{ gap: GAP }}
                ItemSeparatorComponent={() => <View style={{ height: GAP }} />}
                renderItem={({ item }) => (
                    <Pressable style={[styles.card, { width: cardWidth }]}>
                        <View style={styles.imageWrap}>
                            <Image source={item.image} style={styles.foodImage} />
                            <Pressable style={styles.heartBtn} hitSlop={8}>
                                <Ionicons name="heart-outline" size={16} color="#151515" />
                            </Pressable>
                            <View style={styles.ratingBadge}>
                                <Ionicons name="star" size={11} color={ACCENT} />
                                <Text style={styles.ratingText}>4.8</Text>
                            </View>
                        </View>

                        <View style={styles.cardBody}>
                            <Text style={styles.foodName} numberOfLines={1}>{item.name}</Text>
                            <Text style={styles.foodSubtitle}>Fresh &amp; Healthy</Text>

                            <View style={styles.priceRow}>
                                <Text style={styles.price}>
                                    <Text style={styles.priceCurrency}>$</Text>
                                    {item.price.toFixed(2)}
                                </Text>
                                <Pressable style={styles.addBtn} hitSlop={6}>
                                    <Ionicons name="add" size={20} color="#151515" />
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>
                )}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faeece',
    },
    listContent: {
        paddingHorizontal: H_PADDING,
        paddingBottom: 24,
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
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
    },
    imageWrap: {
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
    },
    foodImage: {
        width: '100%',
        height: 130,
        borderRadius: 16,
        resizeMode: 'cover',
    },
    heartBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingBadge: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        backgroundColor: 'rgba(21,21,21,0.75)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },
    ratingText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '700',
    },
    cardBody: {
        paddingHorizontal: 6,
        paddingTop: 10,
        paddingBottom: 4,
    },
    foodName: {
        fontSize: 15,
        fontWeight: '800',
        color: '#151515',
    },
    foodSubtitle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#9A9A9A',
        marginTop: 2,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    price: {
        fontSize: 17,
        fontWeight: '800',
        color: '#151515',
    },
    priceCurrency: {
        color: ACCENT,
        fontSize: 14,
        fontWeight: '800',
    },
    addBtn: {
        width: 32,
        height: 32,
        borderRadius: 11,
        backgroundColor: ACCENT,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
