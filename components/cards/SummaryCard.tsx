import { MoreVertical } from "lucide-react-native"
import { StyleSheet, Text, View } from "react-native"
import { VerticalMore } from "../more/VerticalMore"
import { More } from "./components/More"


export const SummaryCard = ({ value }: { value: number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.preDescription}>Mi cuenta</Text>
            <More />
            <View style={styles.description}>
                <Text style={styles.title}>$&nbsp;</Text>
                <Text style={styles.title}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '95%',
        margin: 10,
        borderRadius: 3,
        padding: 8,
    },
    description: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginLeft: 5,
    },
    preDescription: {
        fontSize: 13,
        color: 'grey',
    },
    title: {
        fontSize: 18,
    }
})