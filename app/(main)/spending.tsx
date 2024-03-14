import { useState } from "react"
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    StyleProp,
    Button
} from 'react-native';
import uuid from 'react-native-uuid';
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    title: z.string().min(4, 'El titulo debe tener al menos 4 caracteres'),
    amount: z.number().refine((val) => val !== 0, { message: 'El monto no puede ser 0' }),
});


const SpendingScreen = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: '',
            amount: 0,
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: any) => {

        const { title, amount } = data

        const newActivity = {
            title,
            amount,
            date: Date.now(),
            id: uuid.v4(),
        }

        console.log(newActivity);
        console.log('onSubmit');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nueva Actividad</Text>

            <View style={styles.formCard}>

                <Text style={styles.label}>Titulo</Text>
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                placeholder="viaje a capital"
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                            />
                            {error && <Text style={styles.error}>{error.message}</Text>}
                        </>
                    )}
                />

                <Text style={styles.label}>Monto</Text>
                <Controller
                    name="amount"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                placeholder="1100"
                                onChangeText={value => {
                                    const newValue = Number(value);
                                    onChange(newValue);
                                }}
                                keyboardType="numeric"
                                style={styles.input}
                            />
                            {error && <Text style={styles.error}>{error.message}</Text>}

                        </>
                    )}
                />


                <View style={styles.buttonContainer}>
                    <Button
                        title="Guardar"
                        onPress={handleSubmit(onSubmit)}
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
    error: {
        color: 'red',
        margin: 3,
        marginLeft: 20,
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