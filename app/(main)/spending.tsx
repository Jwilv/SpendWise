import { useState } from "react"
import { Text, StyleSheet, View, TextInput, StyleProp, Button } from 'react-native';


const SpendingScreen = () => {

    const [formValue, setFormValue] = useState({
        title: '',
        amount: 0,
    });

    const handleChange = (name: string, value: string) => {
        setFormValue({ ...formValue, [name]: value });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nueva Actividad</Text>

            <View style={styles.formCard}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    placeholder="viaje a capital"
                    onChangeText={(value) => handleChange('title', value)}
                    style={styles.input}
                />

                <Text style={styles.label}>Monto</Text>
                <TextInput
                    placeholder="$ 0.00"
                    keyboardType="numeric"
                    onChangeText={(value) => handleChange('amount', value)}
                    style={styles.input}
                />

                <View style={styles.buttonContainer}>
                    <Button
                        title="Guardar"
                        
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        alignSelf: 'center'
    },
    formCard: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 3,
        padding: 8,
        height: 300,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey',
        margin: 10,
    },
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        borderColor: '#555',
        backgroundColor: '#eee',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        width: '90%',
        alignSelf: 'center'
    },
    buttonContainer: {
        margin: 10,
        alignSelf: 'center',
        width: '90%',
        padding: 10,
    }
})

export default SpendingScreen