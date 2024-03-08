import { StyleSheet, View } from 'react-native';
import { SummaryCard } from '~/components/cards/SummaryCard';
import { ChartAtivity } from '~/components/charts/ChartAtivity';
import { ActivityList } from '~/components/lists';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ChartAtivity />
      <SummaryCard />
      <ActivityList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
