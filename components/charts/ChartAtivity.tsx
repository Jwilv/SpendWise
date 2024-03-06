import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export const ChartAtivity = () => {
    return (
        <LineChart
            data={{
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                    },
                    {
                        data: [
                            -Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            -Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                        ]
                    }
                ]
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
