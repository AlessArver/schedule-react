import * as todoType from '../types/todo'

export const setTodos = todos => ({type: todoType.SET_TODOS, todos})
export const addTodoSuccess = text => ({type: todoType.ADD_TODO, text})
export const deleteTodoSuccess = id => ({type: todoType.DELETE_TODO, id})
export const updateTodoTextSuccess = (id, text) => ({type: todoType.UPDATE_TODO_TEXT, id, text})
export const toggleIsCompletedSuccess = id => ({type: todoType.TOGGLE_IS_COMPLETED_TODO, id})
export const toggleIsFetching = isFetching => ({type: todoType.TOGGLE_IS_FETCHING, isFetching})
export const toggleTodoIsLoading = (todoIsLoading, id) => ({
    type: todoType.TOGGLE_TODO_IS_LOADING,
    todoIsLoading, id
})