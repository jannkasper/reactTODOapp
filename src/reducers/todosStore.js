import {
    ADD_TODO,
    DELETE_TODO,
    DELETE_COMPLETED,
    COMPLETE_ALL,
    COMPLETE_TODO, EDIT_TODO,
} from "../constants/ActionTypes";

const initialState = [
    {
        text: 'Study sorting algorithms',
        completed: false,
        id: 0
    },
    {
        text: 'Visit grandparents',
        completed: true,
        id: 1
    },
    {
        text: 'Make groceries',
        completed: false,
        id: 2
    },
];

export default function todosStore(state = initialState, action) {
    switch(action.type) {

        case ADD_TODO: {
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ];
        }

        case EDIT_TODO: {
            return state
                .map(item => {return item.id === action.id ? {...item, text: action.text} : item});
        }

        case DELETE_TODO: {
            return state.filter(item => item.id !== action.id);
        }

        case DELETE_COMPLETED: {
            return state.filter(item => item.completed == false);
        }

        case COMPLETE_TODO: {
            return state
                .map(item => {return item.id === action.id ? {...item, completed: !item.completed} : item});
        }

        case COMPLETE_ALL: {
            return state.map(item =>  ({...item, completed: action.completed}))
        }

        default:
            return state
    }
}
