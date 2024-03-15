import { Platform, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { Slot } from 'expo-router';
import { ActivitiesProvider } from '~/context';



export default function Layout() {
  return (
    <ActivitiesProvider>
      <SafeAreaView style={styles.androidSafeArea} >
        <Slot />
      </SafeAreaView>
    </ActivitiesProvider>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
})