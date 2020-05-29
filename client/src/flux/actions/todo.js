
export const SET_TODOS = '/schedule-react/todo/SET-TODOS'
export const ADD_TODO = '/schedule-react/todo/ADD-TODO'
export const DELETE_TODO = '/schedule-react/todo/DELETE-TODO'
export const UPDATE_TODO_TEXT = '/schedule-react/todo/UPDATE-TODO-TEXT'
export const TOGGLE_IS_COMPLETED_TODO = '/schedule-react/todo/TOGGLE-IS-COMPLETED-TODO'
export const TOGGLE_IS_FETCHING = '/schedule-react/todo/TOGGLE-IS-FETCHING'
export const TOGGLE_TODO_IS_LOADING = '/schedule-react/todo/TOGGLE-TODO-IS-LOADING'

export const setTodos = todos => ({type: SET_TODOS, todos})
export const addTodoSuccess = text => ({type: ADD_TODO, text})
export const deleteTodoSuccess = id => ({type: DELETE_TODO, id})
export const updateTodoTextSuccess = (id, text) => ({type: UPDATE_TODO_TEXT, id, text})
export const toggleIsCompletedSuccess = id => ({type: TOGGLE_IS_COMPLETED_TODO, id})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleTodoIsLoading = (todoIsLoading, id) => ({
    type: TOGGLE_TODO_IS_LOADING,
    todoIsLoading, id
})