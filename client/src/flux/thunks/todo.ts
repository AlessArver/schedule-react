import * as todoAction from '../actions/todo'
import todosApi from '../../api/todos'

export const requestTodos = () => async (dispatch: any) => {
  dispatch(todoAction.toggleIsFetching(true))
  const data = await todosApi.getTodos()
  dispatch(todoAction.setTodos(data.todos))
  dispatch(todoAction.toggleIsFetching(false))
}
export const addTodo = (text: string) => async (dispatch: any) => {
  const data: any = await todosApi.createTodo(text)
  if (!data.resultCode) dispatch(todoAction.addTodoSuccess(data._id, text))
  else console.log(data.message)
}
export const deleteTodo = (id: string) => async (dispatch: any) => {
  dispatch(todoAction.toggleTodoIsLoading(true, id))
  const data = await todosApi.deleteTodo(id)
  if (!data.resultCode) dispatch(todoAction.deleteTodoSuccess(id))
  else console.log(data.message)
  dispatch(todoAction.toggleTodoIsLoading(false, id))
}
export const updateTodoText = (id: string, text: string) => async (dispatch: any) => {
  dispatch(todoAction.toggleTodoIsLoading(true, id))
  const data = await todosApi.updateTodoText(id, text)
  if (!data.resultCode) dispatch(todoAction.updateTodoTextSuccess(id, text))
  else console.log(data.message)
  dispatch(todoAction.toggleTodoIsLoading(false, id))
}