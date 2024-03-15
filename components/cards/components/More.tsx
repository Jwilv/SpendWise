import { View } from "react-native"
import { StyleSheet, Text } from "react-native"
import { VerticalMore } from "~/components/more/VerticalMore"


export const More = () => {
    return (
        <VerticalMore style={styles.pop}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Ingresos</Text>
            </View>
        </VerticalMore>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        color: 'grey',
        fontWeight: 'bold',
    },
    wrapper: {
        backgroundColor: '#fff',
        position: 'relative',
        right: 100,
        top: 0,
        width: 100,
        height: 70,
        padding: 5,
        zIndex: 50,
        borderRadius: 10,
        borderColor: '#555',
        borderWidth: 0.6,
    },
    pop: {
        position: 'absolute',
        right: 3,
        top: 3,
    },
})
