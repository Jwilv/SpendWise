import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SummaryCard } from '~/components/cards/SummaryCard';
import { ChartAtivity } from '~/components/charts/ChartAtivity';
import { ActivityList } from '~/components/lists';
import { ActivitiesContext } from '~/context';


export default function HomeScreen() {

  const { activitiesState } = useContext(ActivitiesContext);
  const [summary, setSummary] = useState(0);

  useEffect(() => {
    const newSummary = activitiesState.reduce((total, activity) => total + activity.value, 0);
    setSummary(newSummary);
  }, [activitiesState])


  return (
    <View style={styles.container}>
      <ChartAtivity />
      <SummaryCard value={summary} />
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
