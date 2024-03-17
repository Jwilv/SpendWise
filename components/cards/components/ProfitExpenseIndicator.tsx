import { TrendingDown, TrendingUp } from "lucide-react-native"
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"

interface ProfitExpenseIndicatorProps {
    value: number,
    label: string,
    isProfit?: boolean
    style?: StyleProp<ViewStyle>
}

export const ProfitExpenseIndicator = ({
    value,
    label,
    isProfit = true,
    style
}: ProfitExpenseIndicatorProps) => {
    return (
        <View style={[styles.container, style]}>
            <View
                style={[
                    styles.iconContainer,
                    isProfit ? styles.iconProfit : styles.iconExpense
                ]}
            >
                {
                    isProfit
                        ? <TrendingUp color={'#75d2ce'} />
                        : <TrendingDown color={'#f06322'} />
                }
            </View>

            <View>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>${value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        marginLeft: 10,
    },
    value: {
        fontSize: 15,
        marginLeft: 10,
        color: 'grey',
    },
    iconContainer: {
        height: 35,
        width: 35,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconProfit: {
        backgroundColor: '#dcf4f3',
    },
    iconExpense: {
        backgroundColor: '#fbd8c8',
    }
})