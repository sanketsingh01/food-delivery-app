import { StyleSheet, Text, View, useWindowDimensions, TextInput } from 'react-native'
import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const H_PADDING = 16;
const GAP = 14;

const SearchScreen = () => {
    const { width } = useWindowDimensions();

    const isTablet = width >= 768;
    const numColumns = isTablet ? 3 : 2;
    const cardWidth = (width - H_PADDING * 2 - GAP * (numColumns - 1)) / numColumns;

    const [searchValue, setSearchvalue] = useState<string>('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Search Screen</Text>
            </View>

            {/* Serach Bar */}
            <View style={styles.searchBar}>
                <Ionicons name="search" size={20} color="#9A9A9A" />
                <TextInput
                    placeholder="Search for your cravings..."
                    value={searchValue}
                    onChangeText={setSearchvalue}
                    style={styles.searchPlaceholder}
                />
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: H_PADDING,
        paddingBottom: 24,
        backgroundColor: '#faeece',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
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