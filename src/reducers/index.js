import { combineReducers} from "redux";
import todosStore from './todosStore';
import visibilityFilter from './visibilityFilterStore'

export default combineReducers({todos: todosStore, visibilityFilter})
