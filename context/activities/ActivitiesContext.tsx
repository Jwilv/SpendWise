
import { createContext } from "react";
import { Activities, Activity } from "~/types";


interface ActivitiesContextProps {
    activitiesState: Activities;
    setActivities: (activity: Activity) => Promise<void>;
    updateActivities: (activity: Activity) => Promise<void>;
    deleteActivities: (activity: Activity) => Promise<void>;
}

export const ActivitiesContext = createContext({} as ActivitiesContextProps) 