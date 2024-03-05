import { Href, Link } from "expo-router"
import { LucideIcon } from 'lucide-react-native';
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native"

interface TabProps {
    style?: StyleProp<TextStyle>;
    icon: LucideIcon;
    active: boolean;
    href: Href<string>;
}


export const Tab = ({
    style,
    icon: Icon,
    active,
    href,
}: TabProps) => {
    return (
        <Link href={href} style={{ color: '#000' }} >
            <Icon
                size={36}
                color={active ? "#8db986" : "#efeae4"}
            />
        </Link>
    )
}