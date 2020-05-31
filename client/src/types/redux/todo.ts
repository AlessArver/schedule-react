import { TodoType } from '../index'
import { TodoState } from '../../flux/reducers/todo'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../flux'

export const SET_TODOS: string = '/schedule-react/todo/SET-TODOS'
export const ADD_TODO: string = '/schedule-react/todo/ADD-TODO'
export const DELETE_TODO: string = '/schedule-react/todo/DELETE-TODO'
export const UPDATE_TODO_TEXT: string = '/schedule-react/todo/UPDATE-TODO-TEXT'
export const TOGGLE_IS_COMPLETED_TODO: string = '/schedule-react/todo/TOGGLE-IS-COMPLETED-TODO'
export const TOGGLE_IS_FETCHING: string = '/schedule-react/todo/TOGGLE-IS-FETCHING'
export const TOGGLE_TODO_IS_LOADING: string = '/schedule-react/todo/TOGGLE-TODO-IS-LOADING'

type SetTodos = {
  readonly type: typeof SET_TODOS
  todos: Array<TodoType>
}
type AddTodoSuccess = {
  readonly type: typeof ADD_TODO
  _id: string
  text: string
}
type DeleteTodoSuccess = {
  readonly type: typeof DELETE_TODO
  _id: string
}
type UpdateTodoTextSuccess = {
  readonly type: typeof UPDATE_TODO_TEXT
  _id: string
  text: string
}
type ToggleIsCompletedSuccess = {
  readonly type: typeof TOGGLE_IS_COMPLETED_TODO
  _id: string
}
type ToggleIsFetching = {
  readonly type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
type ToggleTodoIsLoading = {
  readonly type: typeof TOGGLE_TODO_IS_LOADING
  todoIsLoading: boolean
  _id: string
}

export type TodoAction = SetTodos | AddTodoSuccess | DeleteTodoSuccess
  | UpdateTodoTextSuccess | ToggleIsCompletedSuccess
  | ToggleIsFetching | ToggleTodoIsLoading

export type TodoStateType = typeof TodoState

export type TodoThunk = ThunkAction<Promise<void>, RootState, unknown, TodoAction>