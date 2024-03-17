import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CardProfitExpense, ChallengeCard, SummaryCard } from '~/components/cards';
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
      <SummaryCard value={summary} />
      <CardProfitExpense />
      <ChallengeCard />
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
