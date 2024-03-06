import { Slot } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabs } from '~/components/navigation/BottomTabs';

export default function Layout() {
    return (
        <View style={style.layout}>
            <Slot />
            <BottomTabs />
        </View>
    );
}

const style = StyleSheet.create({
    layout: {
        height: "100%",
        backgroundColor: '#e8e8e8',
    }
})