import { Href } from "expo-router";
import { LayoutPanelLeft, LucideIcon, Plus, TrendingUpIcon } from "lucide-react-native"

interface TabItem {
    href: Href<string>;
    icon: LucideIcon;
}

export const navigationTabItems: TabItem[] = [
    {
        href: '/',
        icon: LayoutPanelLeft,
    },
    {
        href: '/spending',
        icon: Plus,
    },
    {
        href: '/statistics',
        icon: TrendingUpIcon,
    }
]