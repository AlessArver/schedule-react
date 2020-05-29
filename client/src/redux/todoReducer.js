import todosApi from '../api/todos'

const SET_TODOS = 'SET-TODOS'
const ADD_TODO = 'ADD-TODO'
const DELETE_TODO = 'DELETE-TODO'
const UPDATE_TODO_TEXT = 'UPDATE-TODO-TEXT'
const TOGGLE_IS_COMPLETED_TODO = 'TOGGLE-IS-COMPLETED-TODO'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_TODO_IS_LOADING = 'TOGGLE-TODO-IS-LOADING'

const initialState = {
    todos: [],
    isFetching: false,
    completedInProgress: [],
    todosIsLoading: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {...state, todos: action.todos}
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: action.id, text: action.text, completed: false, createdAt: action.createdAt}
                ]
            }
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(t => t._id !== action.id)}
        case UPDATE_TODO_TEXT:
            return {
                ...state,
                todos: state.todos.filter(t => {
                    if (t.id === action.id) return {...t, text: action.text}
                    return t
                })
            }
        case TOGGLE_IS_COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.filter(t => {
                    if (t.id === action.id)
                        return {...t, completed: !t.completed}
                    return t
                })
            }
        case TOGGLE_TODO_IS_LOADING:
            return {
                ...state,
                todosIsLoading: action.todoIsLoading
                    ? [...state.todosIsLoading, action.id]
                    : state.todosIsLoading.filter(id => id !== action.id)
            }
        default:
            return state
    }
}
export default todoReducer

const setTodos = todos => ({type: SET_TODOS, todos})
const addTodoSuccess = text => ({type: ADD_TODO, text})
const deleteTodoSuccess = id => ({type: DELETE_TODO, id})
const updateTodoTextSuccess = (id, text) => ({type: UPDATE_TODO_TEXT, id, text})
export const toggleIsCompletedSuccess = id => ({type: TOGGLE_IS_COMPLETED_TODO, id})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
const toggleTodoIsLoading = (todoIsLoading, id) => ({
    type: TOGGLE_TODO_IS_LOADING,
    todoIsLoading, id
})

export const requestTodos = () => async dispatch => {
    dispatch(toggleIsFetching(true))
    const data = await todosApi.getTodos()
    dispatch(setTodos(data.todos))
    dispatch(toggleIsFetching(false))
}
export const addTodo = text => async dispatch => {
    const data = await todosApi.createTodo(text)
    if (!data.resultCode) dispatch(addTodoSuccess(text))
    else console.log(data.message)
}
export const deleteTodo = id => async dispatch => {
    dispatch(toggleTodoIsLoading(true, id))
    const data = await todosApi.deleteTodo(id)
    if (!data.resultCode) dispatch(deleteTodoSuccess(id))
    else console.log(data.message)
    dispatch(toggleTodoIsLoading(false, id))
}
export const updateTodoText = (id, text) => async dispatch => {
    dispatch(toggleTodoIsLoading(true, id))
    const data = await todosApi.updateTodoText(id, text)
    if (!data.resultCode) dispatch(updateTodoTextSuccess(id, text))
    else console.log(data.message)
    dispatch(toggleTodoIsLoading(false, id))
}