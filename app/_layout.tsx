import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { Slot } from 'expo-router';

import '../global.css';


export default function Layout() {
  return (
    <SafeAreaView
      style={styles.androidSafeArea}
      className='w-full h-full'
    >
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
})