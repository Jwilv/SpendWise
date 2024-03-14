
import { createContext } from "react";
import { Activities } from "~/types";


interface ActivitiesContextProps {
    activities: Activities
}

export const ActivitiesContext = createContext({} as ActivitiesContextProps) 