import { StyleSheet, Text, View } from "react-native"
import { Tab } from "./Tab"
import { navigationTabItems } from "~/constants/navigation"
import { usePathname } from "expo-router"



export const BottomTabs = () => {

    const pathname = usePathname();

    return (
        <View style={styles.tabsContainer}>
            {
                navigationTabItems.map(({ href, icon }) => (
                    <Tab
                        key={href}
                        href={href}
                        icon={icon}
                        active={pathname === href}
                    />
                ))
            }
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
    }
})
