import { Activities, Activity } from "~/types"

type ActionType =
    | { type: 'set-activities', payload: Activity }
    | { type: 'update-activities', payload: Activity }
    | { type: 'delete-activities', payload: Activity }
    | { type: 'refresh-activities', payload: Activities }

export const activitiesReducer = (state: Activities, action: ActionType) => {
    switch (action.type) {
        case 'set-activities':
            return [action.payload, ...state]

        case 'refresh-activities':
            return [...action.payload]

        case 'update-activities':
            return state.map(activity => {
                if (activity.id === action.payload.id) {
                    activity.title = action.payload.title
                    activity.value = action.payload.value
                }
                return activity
            });

        case 'delete-activities':
            return state.filter(activity => activity.id !== action.payload.id)

        default:
            return state
    }
}