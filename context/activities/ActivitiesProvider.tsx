import { useEffect, useReducer } from "react"
import { ActivitiesContext } from "./ActivitiesContext"
import { activitiesReducer } from "./activitiesReducer"
import { Activities, Activity } from "~/types"
import AsyncStorage from '@react-native-async-storage/async-storage';


interface ActivitiesContextProps {
    children: React.ReactNode
}

const ACTIVITIES_INITIAL_STATE: Activities = []

/**
 * ActivitiesProvider component that provides activities context to its children.
 *
 * @param {ActivitiesContextProps} children - the children components to be provided with activities context
 * @return {JSX.Element} the component that provides activities context
 */
export const ActivitiesProvider = ({ children }: ActivitiesContextProps) => {

    const [activitiesState, activitiesDispatch] = useReducer(activitiesReducer, ACTIVITIES_INITIAL_STATE);

    const setActivities = async (activity: Activity) => {
        await AsyncStorage.setItem('activities', JSON.stringify([...activitiesState, activity]));
        activitiesDispatch({ type: 'set-activities', payload: activity })
    }

    const updateActivities = async (activity: Activity) => {
        await AsyncStorage.setItem('activities', JSON.stringify(activitiesState.map(act => {
            if (act.id === activity.id) {
                act.title = activity.title
                act.value = activity.value
            }
            return act
        })));
        activitiesDispatch({ type: 'update-activities', payload: activity })
    }

    const deleteActivities = async (activity: Activity) => {
        await AsyncStorage.setItem('activities', JSON.stringify(activitiesState.filter(act => act.id !== activity.id)));
        activitiesDispatch({ type: 'delete-activities', payload: activity })
    }

    const refreshActivities = async () => {
        const activities = await AsyncStorage.getItem('activities');
        activitiesDispatch({ type: 'refresh-activities', payload: JSON.parse(activities || '[]') })
    }

    useEffect(() => {
        refreshActivities();
    }, [])


    return (
        <ActivitiesContext.Provider
            value={{
                activitiesState,
                setActivities,
                updateActivities,
                deleteActivities,
            }}
        >
            {children}
        </ActivitiesContext.Provider>
    )
}
