import { TodoType } from '../../types'
import todosApi from '../../api/todos'
import { ResultCodes } from '../../types/api'
import todoActions from '../actions/todo'
import loaderActions from '../actions/loader'
import { InferActionsTypes, ThunkType } from '../index'
import { FormAction, reset } from 'redux-form'
import toastActions from '../actions/toast'

const initialState = {
  todos: [] as Array<TodoType>,
  completedInProgress: [] as Array<string>
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof todoActions & typeof loaderActions>
type T = ThunkType<Actions | FormAction>

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'TODO/SET_TODOS':
      return {...state, todos: action.todos}
    case 'TODO/ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {_id: action._id, text: action.text, isCompleted: false, createdAt: action.createdAt}
        ]
      }
    case 'TODO/DELETE_TODO':
      return {...state, todos: state.todos.filter(t => t._id !== action._id)}
    case 'TODO/UPDATE_TODO_TEXT':
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t._id === action._id) return {...t, text: action.text}
          return t
        })
      }
    case 'TODO/TOGGLE_IS_COMPLETED_TODO':
      return {
        ...state,
        todos: state.todos.filter(t => {
          if (t._id === action._id)
            return {...t, completed: !t.isCompleted}
          return t
        })
      }
    default:
      return state
  }
}

export const requestTodos = (page: Date): T => async dispatch => {
  dispatch(loaderActions.toggleIsLoading(true))
  const data = await todosApi.getTodos(page)
  dispatch(loaderActions.toggleIsLoading(false))
  dispatch(todoActions.setTodos(data.todos))
}
export const addTodo = (text: string): T => async dispatch => {
  const data: any = await todosApi.createTodo(text)
  if (data.resultCode === ResultCodes.Success) {
    dispatch(reset('todoForm'))
    dispatch(toastActions.setToast(true, 'toast-success', data.message))
  } else dispatch(toastActions.setToast(true, 'toast-danger', data.message))
}
export const deleteTodo = (_id: string): T => async dispatch => {
  dispatch(loaderActions.toggleItemsIsLoading(true, _id))
  const data = await todosApi.deleteTodo(_id)
  if (data.resultCode === ResultCodes.Success) {
    dispatch(todoActions.deleteTodoSuccess(_id))
    dispatch(toastActions.setToast(true, 'toast-success', data.message))
  } else dispatch(toastActions.setToast(true, 'toast-danger', data.message))
  dispatch(loaderActions.toggleItemsIsLoading(false, _id))
}
export const updateTodoText = (_id: string, text: string): T => async dispatch => {
  dispatch(loaderActions.toggleItemsIsLoading(true, _id))
  const data = await todosApi.updateTodoText(_id, text)
  if (data.resultCode === ResultCodes.Error)
    dispatch(toastActions.setToast(true, 'toast-success', data.message))
  dispatch(loaderActions.toggleItemsIsLoading(false, _id))
}