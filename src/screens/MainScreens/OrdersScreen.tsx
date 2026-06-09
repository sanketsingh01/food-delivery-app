import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../../context/CartContext';

const ACCENT = '#FFC52C';
const DELIVERY_FEE = 1.5;

const OrdersScreen = () => {
    const { items, addToCart, decreaseQuantity, totalPrice } = useCart();

    const tax = totalPrice * 0.03;
    const grandTotal = totalPrice + (items.length ? DELIVERY_FEE : 0) + tax;

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.headertitle}>Your Cart</Text>
            </View>

            {/* Estimated Delivery show box */}
            <View style={styles.deliveryBox}>
                <Ionicons name="time-outline" size={22} color="#151515" />
                <Text style={styles.deliveryText}>Estimated Delivery 25-35 mins</Text>
            </View>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 16 }}
                ListEmptyComponent={
                    <View style={styles.emptyWrap}>
                        <Ionicons name="cart-outline" size={54} color="#C9B98C" />
                        <Text style={styles.empty}>Your cart is empty</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Image source={item.image} style={styles.thumb} />
                        <View style={styles.info}>
                            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                            <Text style={styles.desc} numberOfLines={1}>{item.description}</Text>
                            <Text style={styles.price}>
                                <Text style={styles.currency}>$ </Text>
                                {(item.price * item.quantity).toFixed(2)}
                            </Text>
                        </View>

                        <View style={styles.stepper}>
                            <Pressable style={styles.stepBtn} hitSlop={6} onPress={() => decreaseQuantity(item.id)}>
                                <Ionicons name="remove" size={14} color="#151515" />
                            </Pressable>
                            <Text style={styles.qty}>{item.quantity}</Text>
                            <Pressable style={styles.stepBtn} hitSlop={6} onPress={() => addToCart(item)}>
                                <Ionicons name="add" size={14} color="#151515" />
                            </Pressable>
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    items.length ? (
                        <View>
                            <Pressable>
                                <Text style={styles.prevOrders}>View Previous Orders</Text>
                            </Pressable>

                            <View style={styles.summary}>
                                <SummaryRow label="Subtotal" value={totalPrice} />
                                <SummaryRow label="Delivery Fees" value={DELIVERY_FEE} />
                                <SummaryRow label="Tax" value={tax} />
                            </View>
                        </View>
                    ) : null
                }
            />

            {items.length > 0 && (
                <Pressable style={({ pressed }) => [styles.checkout, pressed && styles.checkoutPressed]}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                    <View style={styles.checkoutTotal}>
                        <Text style={styles.checkoutTotalText}>$ {grandTotal.toFixed(2)}</Text>
                    </View>
                </Pressable>
            )}
        </SafeAreaView>
    );
};

const SummaryRow = ({ label, value }: { label: string; value: number }) => (
    <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>{label}</Text>
        <Text style={styles.summaryValue}>$ {value.toFixed(2)}</Text>
    </View>
);

export default OrdersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faeece',
        paddingHorizontal: 16,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    headertitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#151515',
    },
    deliveryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: ACCENT,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginVertical: 18,
    },
    deliveryText: {
        fontWeight: '600',
        color: '#151515',
    },
    emptyWrap: {
        alignItems: 'center',
        marginTop: 60,
        gap: 12,
    },
    empty: {
        textAlign: 'center',
        color: '#8A8A8A',
        fontSize: 16,
        fontWeight: '600',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    thumb: {
        width: 64,
        height: 64,
        borderRadius: 14,
        resizeMode: 'cover',
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: '800',
        color: '#151515',
    },
    desc: {
        fontSize: 12,
        color: '#9A9A9A',
        marginTop: 2,
    },
    price: {
        fontSize: 16,
        fontWeight: '800',
        color: '#151515',
        marginTop: 6,
    },
    currency: {
        color: '#E0A400',
    },
    stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: '#f8eeae',
        borderRadius: 22,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    stepBtn: {
        width: 28,
        height: 28,
        borderRadius: 22,
        backgroundColor: ACCENT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qty: {
        fontSize: 15,
        fontWeight: '800',
        color: '#151515',
    },
    prevOrders: {
        textAlign: 'center',
        color: '#8A7E5E',
        fontWeight: '700',
        textDecorationLine: 'underline',
        marginVertical: 8,
    },
    summary: {
        marginTop: 8,
        gap: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    summaryLabel: {
        color: '#6B6B6B',
        fontSize: 15,
        fontWeight: '600',
    },
    summaryValue: {
        color: '#151515',
        fontSize: 15,
        fontWeight: '700',
    },
    checkout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: ACCENT,
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 22,
        marginVertical: 14,
        shadowColor: '#E6A900',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
    },
    checkoutPressed: {
        opacity: 0.9,
    },
    checkoutText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#151515',
    },
    checkoutTotal: {
        backgroundColor: '#151515',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    checkoutTotalText: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 15,
    },
});
