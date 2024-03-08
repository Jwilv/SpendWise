import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ActivityList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi actividad</Text>
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
        margin: 4,
    }
})