import React, { createContext, useContext, useState } from 'react';
import { foodData } from '../screens/data/FoodItemsData';

type CartItem = foodData & { quantity: number };

type CartContextType = {
    items: CartItem[];
    addToCart: (item: foodData) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    totalCount: number;
    totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
    const [ items, setItems ] = useState<CartItem[]>([]);

    const addToCart = (item: foodData) => {
        setItems((prev) => {
            const existingItem = prev.find((i) => i.id === item.id);
            if(existingItem) {
                return prev.map((i) => 
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const decreaseQuantity = (id: number) => {
        setItems((prev) =>
            prev
                .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
                .filter((i) => i.quantity > 0)
        );
    };

    const removeFromCart = (id: number) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    };

    const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, decreaseQuantity, removeFromCart, totalCount, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within a CartProvider');
    return ctx;
};