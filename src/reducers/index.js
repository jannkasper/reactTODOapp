import { combineReducers} from "redux";
import todosStore from './todosStore';
import visibilityFilterStore from './visibilityFilterStore'

export default combineReducers({todos: todosStore, visibilityFilterStore})
