import { StyleSheet, Text, View } from "react-native"
import { IconCard } from "./components/IconCard";
import { Activity } from "~/types";

export const ActivityCard = ({ title, value }: Activity) => {
    return (
        <View style={styles.Card}>
            <IconCard isGain={value > 0} />
            <Text
                numberOfLines={1}
                style={styles.title}
            >
                {title}
            </Text>
            <Text
                style={[styles.value, value < 0 ? styles.loss : styles.gain]}
                numberOfLines={1}
            >
                {value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 3,
        display: 'flex',
        height: 50,
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        width: '95%',
    },
    title: {
        width: '60%',
        fontSize: 16,
        fontWeight: '400',
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    gain: {
        color: '#8db986',
    },
    loss: {
        color: '#f25f5c',
    }
})
