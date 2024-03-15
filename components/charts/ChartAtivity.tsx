import { useContext, useEffect, useState } from "react";
import { ActivitiesContext } from "~/context";
import { CardChartLine } from "./components/CardChartLine";
import { CardNoDates } from "./components/CardNoDates";
import moment from 'moment';

export const ChartAtivity = () => {

    const { activitiesState } = useContext(ActivitiesContext);

    const values = activitiesState.slice(0, 5).map(act => act.value);
    const labels = activitiesState.slice(0, 5).map(act => {
        const momentDate = moment(act.date);
        return momentDate.format('DD/MM');
    });

    const [chartValues, setChartValues] = useState({
        values,
        labels,
    });

    useEffect(() => {

        const values = activitiesState.slice(0, 5).reverse().map(act => act.value);
        const labels = activitiesState.slice(0, 5).reverse().map(act => {
            const momentDate = moment(act.date);
            return momentDate.format('DD/MM');
        });

        setChartValues({
            values,
            labels
        })

    }, [activitiesState])

    return (
        chartValues.values.length > 0
            ? <CardChartLine
                values={chartValues.values}
                labels={chartValues.labels}
            />
            : <CardNoDates />
    )
}
