import {TodoType} from '../../types/types';

export const SET_TODOS: string = '/schedule-react/todo/SET-TODOS'
export const ADD_TODO: string = '/schedule-react/todo/ADD-TODO'
export const DELETE_TODO: string = '/schedule-react/todo/DELETE-TODO'
export const UPDATE_TODO_TEXT: string = '/schedule-react/todo/UPDATE-TODO-TEXT'
export const TOGGLE_IS_COMPLETED_TODO: string = '/schedule-react/todo/TOGGLE-IS-COMPLETED-TODO'
export const TOGGLE_IS_FETCHING: string = '/schedule-react/todo/TOGGLE-IS-FETCHING'
export const TOGGLE_TODO_IS_LOADING: string = '/schedule-react/todo/TOGGLE-TODO-IS-LOADING'

export type SetTodosACType = {
    type: typeof SET_TODOS
    todos: Array<TodoType>
}
export type AddTodoSuccessACType = {
    type: typeof ADD_TODO
    text: string
}
export type DeleteTodoSuccessACType = {
    type: typeof DELETE_TODO
    id: string
}
export type UpdateTodoTextSuccessACType = {
    type: typeof UPDATE_TODO_TEXT
    id: string
    text: string
}
export type ToggleIsCompletedSuccessACType = {
    type: typeof TOGGLE_IS_COMPLETED_TODO
    id: string
}
export type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export type ToggleTodoIsLoadingACType = {
    type: typeof TOGGLE_TODO_IS_LOADING
    todoIsLoading: boolean
    id: string
}

export const setTodos = (todos: Array<TodoType>): SetTodosACType => ({type: SET_TODOS, todos})
export const addTodoSuccess = (text: string): AddTodoSuccessACType => ({type: ADD_TODO, text})
export const deleteTodoSuccess = (id: string): DeleteTodoSuccessACType => ({type: DELETE_TODO, id})
export const updateTodoTextSuccess = (id: string, text: string): UpdateTodoTextSuccessACType =>
    ({type: UPDATE_TODO_TEXT, id, text})
export const toggleIsCompletedSuccess = (id: string): ToggleIsCompletedSuccessACType =>
    ({type: TOGGLE_IS_COMPLETED_TODO, id})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType =>
    ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleTodoIsLoading = (todoIsLoading: boolean, id: string): ToggleTodoIsLoadingACType => ({
    type: TOGGLE_TODO_IS_LOADING,
    todoIsLoading, id
})