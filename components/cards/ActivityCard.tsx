import moment from "moment";
import { StyleSheet, Text, View } from "react-native"
import { Activity } from "~/types";
import 'moment/locale/es';

export const ActivityCard = ({ title, value, date }: Activity) => {

    const parseDate = moment(date).locale('es-AR').format('DD/MM/YYYY');

    return (
        <View style={styles.Card}>
            <Text
                numberOfLines={1}
                style={styles.title}
            >
                {title}
            </Text>

            <Text
                style={styles.value}
                numberOfLines={1}
            >
                {value.toLocaleString('es-ES')}
            </Text>

            <Text
                numberOfLines={1}
                style={styles.date}
            >
                {parseDate}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        alignItems: 'center',
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
        width: '55%',
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 10,
    },
    value: {
        fontSize: 16,
        marginLeft: 'auto',
    },
    date: {
        marginLeft: 'auto',
        marginRight: 10,
        color: '#6b6b6b',
    }
})
