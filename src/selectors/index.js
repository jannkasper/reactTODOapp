import { createSelector } from 'reselect';
import {VISIBILITY_FILTERS} from "../constants/VisibilityFilters";

const getTodoList = state => state.todos;

export const getCompletedCount = createSelector(
    [getTodoList],
    todoList => (todoList.reduce((count, todo) => todo.completed ? count+1 : count, 0)
    )
);

export const getTodosVisibilityFilter = (store, visibilityFilter) => {
    const todoList = getTodoList(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return todoList.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return todoList.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return todoList;
    }
}
