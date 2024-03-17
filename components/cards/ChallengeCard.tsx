import { StyleSheet, View } from "react-native"
import { ChallengeModifier } from "./components/ChallengeModifier"
import { ProgressChart } from "react-native-chart-kit"


export const ChallengeCard = () => {
    const data = {
        data: [0.4]
    };

    const chartConfig = {
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(70, 106, 234, ${opacity})`,
    };

    return (
        <View style={styles.container}>
            <ChallengeModifier />
            <View style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ProgressChart
                    data={data}
                    width={170}
                    height={100}
                    radius={32}
                    chartConfig={chartConfig}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 150,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
    }
})
