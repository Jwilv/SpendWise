import { Link } from "expo-router"
import { LucideIcon } from 'lucide-react-native';
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native"

interface TabProps {
    style?: StyleProp<TextStyle>;
    icon: LucideIcon;
    active: boolean;
}


export const Tab = ({ style, icon: Icon, active }: TabProps) => {
    return (
        <Link href="/home" style={style} >
            <Icon
                size={36}
                color={active ? "#8db986" : "#efeae4"}
            />
        </Link>
    )
}