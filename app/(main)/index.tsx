import { StyleSheet, View } from 'react-native';
import { ChartAtivity } from '~/components/charts/ChartAtivity';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ChartAtivity />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
