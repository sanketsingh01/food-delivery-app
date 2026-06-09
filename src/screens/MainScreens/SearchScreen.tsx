import { StyleSheet, Text, View, TextInput, useWindowDimensions } from 'react-native'
import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import FoodItemsList from '../../components/FoodItemsList';
import { foodItems } from '../data/FoodItemsData';

const H_PADDING = 16;

const SearchScreen = () => {
    const { width } = useWindowDimensions();
    const [searchValue, setSearchvalue] = useState<string>('');

    const filteredItems = foodItems.filter((item) =>
        item.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    const isTablet = width >= 768;
    const numColumns = isTablet ? 3 : 2;
    const cardWidth = (width - H_PADDING * 2 - 14 * (numColumns - 1)) / numColumns;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Search Screen</Text>
                </View>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={20} color="#9A9A9A" />
                    <TextInput
                        placeholder="Search for your cravings..."
                        value={searchValue}
                        onChangeText={setSearchvalue}
                        style={styles.searchPlaceholder}
                    />
                </View>
            </View>

            <FoodItemsList data={filteredItems} ListHeaderComponent={null} />
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faeece',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    headerContainer: {
        paddingHorizontal: H_PADDING,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginTop: 18,
        marginBottom: 18,
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
})
