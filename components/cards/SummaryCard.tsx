import { StyleSheet, Text, View } from "react-native"

export const SummaryCard = ({ value }: { value: number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Total</Text>
            <Text style={styles.value}>${value.toLocaleString('es-ES')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#466aea',
        width: '100%',
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 5,
        fontWeight: "400",
    },
    value: {
        fontSize: 40,
        color: '#fff',
    }
})