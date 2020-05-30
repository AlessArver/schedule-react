import { TodoType } from '../types'
import { TodoState } from '../../flux/reducers/todo'

export const SET_TODOS: string = '/schedule-react/todo/SET-TODOS'
export const ADD_TODO: string = '/schedule-react/todo/ADD-TODO'
export const DELETE_TODO: string = '/schedule-react/todo/DELETE-TODO'
export const UPDATE_TODO_TEXT: string = '/schedule-react/todo/UPDATE-TODO-TEXT'
export const TOGGLE_IS_COMPLETED_TODO: string = '/schedule-react/todo/TOGGLE-IS-COMPLETED-TODO'
export const TOGGLE_IS_FETCHING: string = '/schedule-react/todo/TOGGLE-IS-FETCHING'
export const TOGGLE_TODO_IS_LOADING: string = '/schedule-react/todo/TOGGLE-TODO-IS-LOADING'

type SetTodos = {
  type: typeof SET_TODOS
  todos: Array<TodoType>
}
type AddTodoSuccess = {
  type: typeof ADD_TODO
  id: string
  text: string
}
type DeleteTodoSuccess = {
  type: typeof DELETE_TODO
  id: string
}
type UpdateTodoTextSuccess = {
  type: typeof UPDATE_TODO_TEXT
  id: string
  text: string
}
type ToggleIsCompletedSuccess = {
  type: typeof TOGGLE_IS_COMPLETED_TODO
  id: string
}
type ToggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
type ToggleTodoIsLoading = {
  type: typeof TOGGLE_TODO_IS_LOADING
  todoIsLoading: boolean
  id: string
}

export type TodoAction = SetTodos | AddTodoSuccess | DeleteTodoSuccess
  | UpdateTodoTextSuccess | ToggleIsCompletedSuccess
  | ToggleIsFetching | ToggleTodoIsLoading

export type TodoStateType = typeof TodoState