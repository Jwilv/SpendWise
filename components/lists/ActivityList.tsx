import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ActivityCard } from '../cards'

export const ActivityList = () => {

    interface ActivityCardProps {
        title: string;
        id: string;
        value: number;
    }

    const data: ActivityCardProps[] = [
        { id: '1', title: 'Item 1', value: -25000 },
        { id: '2', title: 'Item 2', value: 1500 },
        { id: '3', title: 'Item 3', value: 100 },
        { id: '4', title: 'Item 4', value: -100 },
        { id: '5', title: 'Item 5', value: 100 },
        { id: '6', title: 'Item 6', value: 100 },
        { id: '7', title: 'Item 7', value: -100 },
        { id: '8', title: 'Item 8', value: 100 },
        { id: '9', title: 'Item 9', value: 100 },

    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi actividad</Text>

            <FlatList
                data={data}
                renderItem={({ item }) => <ActivityCard {...item} />}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 4,
        borderRadius: 3,
        width: '95%',
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        margin: 8,
    },
})