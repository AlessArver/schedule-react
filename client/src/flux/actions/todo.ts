import { TodoType } from '../../types/types'
import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODOS, TodoAction,
  TOGGLE_IS_COMPLETED_TODO,
  TOGGLE_IS_FETCHING, TOGGLE_TODO_IS_LOADING,
  UPDATE_TODO_TEXT
} from '../../types/redux/todo'

export const setTodos = (todos: Array<TodoType>): TodoAction => ({type: SET_TODOS, todos})
export const addTodoSuccess = (_id: string, text: string): TodoAction => ({type: ADD_TODO, _id, text})
export const deleteTodoSuccess = (_id: string): TodoAction => ({type: DELETE_TODO, _id})
export const updateTodoTextSuccess = (_id: string, text: string): TodoAction =>
  ({type: UPDATE_TODO_TEXT, _id, text})
export const toggleIsCompletedSuccess = (_id: string): TodoAction =>
  ({type: TOGGLE_IS_COMPLETED_TODO, _id})
export const toggleIsFetching = (isFetching: boolean): TodoAction =>
  ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleTodoIsLoading = (todoIsLoading: boolean, _id: string): TodoAction => ({
  type: TOGGLE_TODO_IS_LOADING,
  todoIsLoading, _id
})