import { TrendingDown, TrendingUp } from "lucide-react-native"
import { StyleSheet, Text, View } from "react-native"
import { ProfitExpenseIndicator } from "./components/ProfitExpenseIndicator"


export const CardProfitExpense = () => {
    return (
        <View style={styles.container}>
            <ProfitExpenseIndicator
                value={10000}
                label={'Ingresos'}
                isProfit={true}
                style={styles.indicator}
            />
            <ProfitExpenseIndicator
                value={10000}
                label={'Gastos'}
                isProfit={false}
                style={styles.indicator}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: -35,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    indicator: {
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})
