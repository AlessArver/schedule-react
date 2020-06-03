import { TodoType } from '../../types'
import todosApi from '../../api/todos'
import { ResultCodes } from '../../types/api'
import todoActions from '../actions/todo'
import { InferActionsTypes, ThunkType } from '../index'

const initialState = {
  todos: [] as Array<TodoType>,
  isFetching: false,
  completedInProgress: [] as Array<string>,
  todosIsLoading: [] as Array<string>
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof todoActions>
type T = ThunkType<Actions>

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'SET_TODOS':
      return {...state, todos: action.todos}
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {_id: action._id, text: action.text, isCompleted: false, createdAt: action.createdAt}
        ]
      }
    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter(t => t._id !== action._id)}
    case 'UPDATE_TODO_TEXT':
      return {
        ...state,
        todos: state.todos.filter(t => {
          if (t._id === action._id) return {...t, text: action.text}
          return t
        })
      }
    case 'TOGGLE_IS_COMPLETED_TODO':
      return {
        ...state,
        todos: state.todos.filter(t => {
          if (t._id === action._id)
            return {...t, completed: !t.isCompleted}
          return t
        })
      }
    case 'TOGGLE_TODO_IS_LOADING':
      return {
        ...state,
        todosIsLoading: action.todoIsLoading
          ? [...state.todosIsLoading, action._id]
          : state.todosIsLoading.filter(_id => _id !== action._id)
      }
    default:
      return state
  }
}

export const requestTodos = (): T => async dispatch => {
  dispatch(todoActions.toggleIsFetching(true))
  const data = await todosApi.getTodos()
  dispatch(todoActions.setTodos(data.todos))
  dispatch(todoActions.toggleIsFetching(false))
}
export const addTodo = (text: string): T => async dispatch => {
  const data: any = await todosApi.createTodo(text)
  if (data.resultCode === ResultCodes.Success)
    dispatch(todoActions.addTodoSuccess(data._id, text, data.createdAt))
  else console.log(data.message)
}
export const deleteTodo = (_id: string): T => async dispatch => {
  dispatch(todoActions.toggleTodoIsLoading(true, _id))
  const data = await todosApi.deleteTodo(_id)
  if (data.resultCode === ResultCodes.Success)
    dispatch(todoActions.deleteTodoSuccess(_id))
  else console.log(data.message)
  dispatch(todoActions.toggleTodoIsLoading(false, _id))
}
export const updateTodoText = (_id: string, text: string): T => async dispatch => {
  dispatch(todoActions.toggleTodoIsLoading(true, _id))
  const data = await todosApi.updateTodoText(_id, text)
  if (data.resultCode === ResultCodes.Success)
    dispatch(todoActions.updateTodoTextSuccess(_id, text))
  else console.log(data.message)
  dispatch(todoActions.toggleTodoIsLoading(false, _id))
}