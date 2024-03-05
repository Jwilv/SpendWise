import { Platform, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { Slot } from 'expo-router';


export default function Layout() {
  return (
    <SafeAreaView style={styles.androidSafeArea} >
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
})