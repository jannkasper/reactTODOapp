import {SET_FILTER} from "../constants/ActionTypes";
import {VISIBILITY_FILTERS} from "../constants/VisibilityFilters";


const initialState = VISIBILITY_FILTERS.ALL;

export default function visibilityFilterStore(state = initialState, action) {
    switch(action.type) {

        case SET_FILTER: {
            return action.filter
        }

        default:
            return state
    }
}
