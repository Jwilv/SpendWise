import { StyleSheet, Text, View } from "react-native"
import { Tab } from "./Tab"
import { LayoutPanelLeft, Plus, TrendingUpIcon } from "lucide-react-native"


export const BottomTabs = () => {
    return (
        <View style={styles.tabsContainer}>
            <Tab style={styles.tab} icon={LayoutPanelLeft} active />
            <Tab style={styles.tab} icon={Plus} active={false} />
            <Tab style={styles.tab} icon={TrendingUpIcon} active={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    tabsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#373737',
        height: 60,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    tab: {
        color: '#000'
    },
})
