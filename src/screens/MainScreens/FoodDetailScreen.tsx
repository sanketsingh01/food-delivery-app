import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { foodData } from '../data/FoodItemsData';
import { useCart } from '../../context/CartContext';

const ACCENT = '#FFC529';

const FoodDetailScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const item = route.params?.item as foodData;

    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(item);
        }
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header with back button */}
            <View style={styles.header}>
                <Pressable style={styles.iconBtn} hitSlop={8} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={22} color="#151515" />
                </Pressable>
                <Pressable style={styles.iconBtn} hitSlop={8} onPress={() => setFavorite((f) => !f)}>
                    <Ionicons
                        name={favorite ? 'heart' : 'heart-outline'}
                        size={22}
                        color={favorite ? '#E2452F' : '#151515'}
                    />
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Food image */}
                <View style={styles.imageWrap}>
                    <Image source={item?.image} style={styles.foodImage} />
                </View>

                {/* Quantity selector */}
                <View style={styles.quantityPill}>
                    <Pressable
                        hitSlop={8}
                        onPress={() => setQuantity((q) => Math.max(1, q - 1))}
                        style={styles.qtyBtn}
                    >
                        <Ionicons name="remove" size={18} color="#151515" />
                    </Pressable>
                    <Text style={styles.qtyValue}>{quantity}</Text>
                    <Pressable hitSlop={8} onPress={() => setQuantity((q) => q + 1)} style={styles.qtyBtn}>
                        <Ionicons name="add" size={18} color="#151515" />
                    </Pressable>
                </View>

                {/* Name + price */}
                <View style={styles.titleRow}>
                    <Text style={styles.name}>{item?.name}</Text>
                    <Text style={styles.price}>
                        <Text style={styles.priceCurrency}>$ </Text>
                        {item?.price.toFixed(2)}
                    </Text>
                </View>

                {/* Stats */}
                <View style={styles.statsRow}>
                    <View style={styles.stat}>
                        <Ionicons name="star" size={16} color={ACCENT} />
                        <Text style={styles.statText}>4.8</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.stat}>
                        <Ionicons name="flame-outline" size={16} color="#E2452F" />
                        <Text style={styles.statText}>320 Calories</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.stat}>
                        <Ionicons name="time-outline" size={16} color="#151515" />
                        <Text style={styles.statText}>20-30 min</Text>
                    </View>
                </View>

                {/* Details */}
                <Text style={styles.detailsHeading}>Details</Text>
                <Text style={styles.detailsText}>
                    {item?.description}. A delicious recipe made fresh to order with hand-picked
                    ingredients and authentic spices. Perfectly cooked and served hot, it&apos;s the
                    ideal pick for a satisfying, wholesome meal any time of the day.
                </Text>
            </ScrollView>

            {/* Add to cart */}
            <Pressable
                style={({ pressed }) => [styles.addToCart, pressed && styles.addToCartPressed]}
                onPress={handleAddToCart}
            >
                <Text style={styles.addToCartText}>Add to Cart</Text>
                <View style={styles.addToCartTotal}>
                    <Text style={styles.addToCartTotalText}>$ {(item?.price * quantity).toFixed(2)}</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

export default FoodDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faeece',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    iconBtn: {
        width: 42,
        height: 42,
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
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 24,
        alignItems: 'center',
    },
    imageWrap: {
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.12,
        shadowRadius: 18,
        elevation: 5,
    },
    foodImage: {
        width: 240,
        height: 240,
        resizeMode: 'cover',
    },
    quantityPill: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
        backgroundColor: ACCENT,
        borderRadius: 22,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: -22,
        shadowColor: '#E6A900',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 5,
    },
    qtyBtn: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: 'rgba(255,255,255,0.45)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qtyValue: {
        fontSize: 17,
        fontWeight: '800',
        color: '#151515',
        minWidth: 18,
        textAlign: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 24,
    },
    name: {
        flex: 1,
        fontSize: 24,
        fontWeight: '800',
        color: '#151515',
    },
    price: {
        fontSize: 22,
        fontWeight: '800',
        color: '#151515',
    },
    priceCurrency: {
        color: '#E0A400',
        fontSize: 18,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    stat: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    statText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#151515',
    },
    statDivider: {
        width: 1,
        height: 20,
        backgroundColor: '#EEE7D4',
    },
    detailsHeading: {
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: '800',
        color: '#151515',
        marginTop: 24,
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 14,
        lineHeight: 22,
        color: '#7A7A7A',
        fontWeight: '500',
    },
    addToCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: ACCENT,
        borderRadius: 18,
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginHorizontal: 20,
        marginBottom: 50,
        shadowColor: '#E6A900',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
    },
    addToCartPressed: {
        opacity: 0.9,
    },
    addToCartText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#151515',
    },
    addToCartTotal: {
        backgroundColor: '#151515',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    addToCartTotalText: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 15,
    },
});
