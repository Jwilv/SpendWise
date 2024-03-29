import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ActivityCard } from '../cards'
import { Activities } from '~/types';
import { ActivitiesContext } from '~/context';

export const ActivityList = () => {

    const { activitiesState } = useContext(ActivitiesContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi actividad</Text>

            <FlatList
                data={activitiesState}
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
        borderRadius: 20,
        width: '95%',
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        margin: 8,
        marginLeft: 12,
        color: '#6b6b6b',
    },
})