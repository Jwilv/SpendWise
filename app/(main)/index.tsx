import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Hello a</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
