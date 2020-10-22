import * as types from '../constants/ActionTypes'

export const addTodo = text => ({type: types.ADD_TODO, text});
export const editTodo = (id, text) => ({type: types.EDIT_TODO, id, text});
export const deleteTodo = id => ({type:types.DELETE_TODO, id});
export const deleteCompleted = () => ({type:types.DELETE_COMPLETED});
export const completeTodo = id => ({type: types.COMPLETE_TODO, id});
export const completeAll = completed => ({type: types.COMPLETE_ALL, completed});
export const setFilter = filter =>({type: types.SET_FILTER, filter});
