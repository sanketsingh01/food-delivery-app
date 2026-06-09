import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { foodData, foodItems } from '../screens/data/FoodItemsData';
import { useCart } from '../context/CartContext';


const ACCENT = '#FFC529';
const H_PADDING = 16;
const GAP = 14;

type FoodItemsListProps = {
    data?: foodData[];
    ListHeaderComponent?: React.ComponentType | React.ReactElement | null;
};

const FoodItemsList = ({ data = foodItems, ListHeaderComponent }: FoodItemsListProps) => {
    const { width } = useWindowDimensions();

    const isTablet = width >= 768;
    const numColumns = isTablet ? 3 : 2;
    const cardWidth = (width - H_PADDING * 2 - GAP * (numColumns - 1)) / numColumns;

    const { addToCart } = useCart();
    const navigation = useNavigation<any>();

    return (
        <FlatList
            key={isTablet ? 'tablet-list' : 'phone-list'}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ListHeaderComponent}
            contentContainerStyle={styles.listContent}
            columnWrapperStyle={{ gap: GAP }}
            ItemSeparatorComponent={() => <View style={{ height: GAP }} />}
            renderItem={({ item }) => (
                <Pressable
                    style={[styles.card, { width: cardWidth }]}
                    onPress={() => navigation.navigate('FoodDetail', { item })}
                >
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
                            <Pressable style={styles.addBtn} hitSlop={6} onPress={() => addToCart(item)}>
                                <Ionicons name="add" size={20} color="#FFFFFF" />
                            </Pressable>
                        </View>
                    </View>
                </Pressable>
            )}
        />
    );
};

export default FoodItemsList;

const styles = StyleSheet.create({
    listContent: {
        paddingHorizontal: H_PADDING,
        paddingBottom: 24,
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
});
