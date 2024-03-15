import { StyleSheet, Text, View } from "react-native"


export const CardNoDates = () => {
    return (
        <View style={styles.card}>
            <Text>No dispone de los datos suficientes para mostrar el grafico</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        margin: 10,
        borderRadius: 3,
        padding: 8,
        height: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
