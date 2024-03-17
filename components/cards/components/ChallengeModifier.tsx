import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export const ChallengeModifier = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Challenge Mensual</Text>
            <Text style={styles.challengeDesc}>$270.000 / $500.000</Text>

            <TouchableOpacity style={styles.containerButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        color: '#6b6b6b',
        fontWeight: '500',
    },
    challengeDesc: {
        fontSize: 15,
        color: '#6b6b6b',
        fontWeight: '400',
        margin: 5,
    },
    button: {
        backgroundColor: '#466aea',
        width: 100,
        height: 30,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    containerButton: {
        marginTop: 13,
    }
})