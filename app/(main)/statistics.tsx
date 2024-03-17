
import { StyleSheet, Text, View } from 'react-native'
import { ChartAtivity } from '~/components/charts/ChartAtivity'

const statisticsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Estadisticas</Text>
            <ChartAtivity />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default statisticsScreen