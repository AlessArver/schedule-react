import todosApi from '../../api/todos'
import * as todoAction from '../actions/todo'
import {TodoType} from '../../types/types';

const initialState = {
    todos: [] as Array<TodoType>,
    isFetching: false,
    completedInProgress: [] as Array<number>,
    todosIsLoading: [] as Array<number>
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case todoAction.SET_TODOS:
            return {...state, todos: action.todos}
        case todoAction.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: action.id, text: action.text, completed: false, createdAt: action.createdAt}
                ]
            }
        case todoAction.DELETE_TODO:
            return {...state, todos: state.todos.filter(t => t._id !== action.id)}
        case todoAction.UPDATE_TODO_TEXT:
            return {
                ...state,
                todos: state.todos.filter(t => {
                    if (t._id === action.id) return {...t, text: action.text}
                    return t
                })
            }
        case todoAction.TOGGLE_IS_COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.filter(t => {
                    if (t._id === action.id)
                        return {...t, completed: !t.isCompleted}
                    return t
                })
            }
        case todoAction.TOGGLE_TODO_IS_LOADING:
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

export const requestTodos = () => async (dispatch: any) => {
    dispatch(todoAction.toggleIsFetching(true))
    const data = await todosApi.getTodos()
    dispatch(todoAction.setTodos(data.todos))
    dispatch(todoAction.toggleIsFetching(false))
}
export const addTodo = (text: string) => async (dispatch: any) => {
    const data = await todosApi.createTodo(text)
    if (!data.resultCode) dispatch(todoAction.addTodoSuccess(text))
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