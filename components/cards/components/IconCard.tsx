import { MinusSquare, PlusSquare } from "lucide-react-native";
import { StyleSheet } from "react-native";

interface IconCardProps {
    isGain: boolean;
}

export const IconCard = ({ isGain }: IconCardProps) => {
    return (
        isGain
            ? <PlusSquare
                color={'#8db986'}
                size={30}
                style={styles.icon}
            />
            : <MinusSquare
                color={'#f25f5c'}
                size={30}
                style={styles.icon}
            />
    )
}

const styles = StyleSheet.create({
    icon: {
        margin: 5,
    }
})