import todosApi from '../../api/todos'
import * as todoType from '../../types/todo'
import * as todoAction from '../actions/todo'

const initialState = {
    todos: [],
    isFetching: false,
    completedInProgress: [],
    todosIsLoading: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case todoType.SET_TODOS:
            return {...state, todos: action.todos}
        case todoType.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: action.id, text: action.text, completed: false, createdAt: action.createdAt}
                ]
            }
        case todoType.DELETE_TODO:
            return {...state, todos: state.todos.filter(t => t._id !== action.id)}
        case todoType.UPDATE_TODO_TEXT:
            return {
                ...state,
                todos: state.todos.filter(t => {
                    if (t.id === action.id) return {...t, text: action.text}
                    return t
                })
            }
        case todoType.TOGGLE_IS_COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.filter(t => {
                    if (t.id === action.id)
                        return {...t, completed: !t.completed}
                    return t
                })
            }
        case todoType.TOGGLE_TODO_IS_LOADING:
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

export const requestTodos = () => async dispatch => {
    dispatch(todoAction.toggleIsFetching(true))
    const data = await todosApi.getTodos()
    dispatch(todoAction.setTodos(data.todos))
    dispatch(todoAction.toggleIsFetching(false))
}
export const addTodo = text => async dispatch => {
    const data = await todosApi.createTodo(text)
    if (!data.resultCode) dispatch(todoAction.addTodoSuccess(text))
    else console.log(data.message)
}
export const deleteTodo = id => async dispatch => {
    dispatch(todoAction.toggleTodoIsLoading(true, id))
    const data = await todosApi.deleteTodo(id)
    if (!data.resultCode) dispatch(todoAction.deleteTodoSuccess(id))
    else console.log(data.message)
    dispatch(todoAction.toggleTodoIsLoading(false, id))
}
export const updateTodoText = (id, text) => async dispatch => {
    dispatch(todoAction.toggleTodoIsLoading(true, id))
    const data = await todosApi.updateTodoText(id, text)
    if (!data.resultCode) dispatch(todoAction.updateTodoTextSuccess(id, text))
    else console.log(data.message)
    dispatch(todoAction.toggleTodoIsLoading(false, id))
}