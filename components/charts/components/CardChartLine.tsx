import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native"

interface CardChartLineProps {
    values: number[],
    labels: string[]
}

export const CardChartLine = ({ values, labels }: CardChartLineProps) => {
    return (
        <LineChart
            data={{
                labels: labels,
                datasets: [{ data: values }]
            }}
            width={Dimensions.get("window").width - 10} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "#000",
                backgroundGradientFrom: "#000",
                backgroundGradientTo: "#000",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
            }}
            bezier
            style={{
                borderRadius: 16
            }}
        />
    )
}
