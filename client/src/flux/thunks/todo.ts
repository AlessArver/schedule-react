import * as todoAction from '../actions/todo'
import todosApi from '../../api/todos'
import { TodoThunk } from '../../types/redux/todo'
import { ResultCodes } from '../../types/api'

export const requestTodos = (): TodoThunk => async dispatch => {
  dispatch(todoAction.toggleIsFetching(true))
  const data = await todosApi.getTodos()
  dispatch(todoAction.setTodos(data.todos))
  dispatch(todoAction.toggleIsFetching(false))
}
export const addTodo = (text: string): TodoThunk => async dispatch => {
  const data: any = await todosApi.createTodo(text)
  if (data.resultCode === ResultCodes.Success) dispatch(todoAction.addTodoSuccess(data._id, text))
  else console.log(data.message)
}
export const deleteTodo = (_id: string): TodoThunk => async dispatch => {
  dispatch(todoAction.toggleTodoIsLoading(true, _id))
  const data = await todosApi.deleteTodo(_id)
  if (data.resultCode === ResultCodes.Success) dispatch(todoAction.deleteTodoSuccess(_id))
  else console.log(data.message)
  dispatch(todoAction.toggleTodoIsLoading(false, _id))
}
export const updateTodoText = (_id: string, text: string): TodoThunk => async dispatch => {
  dispatch(todoAction.toggleTodoIsLoading(true, _id))
  const data = await todosApi.updateTodoText(_id, text)
  if (data.resultCode === ResultCodes.Success) dispatch(todoAction.updateTodoTextSuccess(_id, text))
  else console.log(data.message)
  dispatch(todoAction.toggleTodoIsLoading(false, _id))
}