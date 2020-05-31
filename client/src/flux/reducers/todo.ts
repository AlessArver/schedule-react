import {TodoType} from '../../types';
import {
    ADD_TODO,
    DELETE_TODO,
    SET_TODOS, TodoStateType,
    TOGGLE_IS_COMPLETED_TODO,
    TOGGLE_TODO_IS_LOADING,
    UPDATE_TODO_TEXT
} from '../../types/redux/todo'

export const TodoState = {
    todos: [] as Array<TodoType>,
    isFetching: false,
    completedInProgress: [] as Array<number>,
    todosIsLoading: [] as Array<number>
}

export default (state = TodoState, action: any): TodoStateType => {
    switch (action.type) {
        case SET_TODOS:
            return {...state, todos: action.todos}
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {_id: action._id, text: action.text, isCompleted: false, createdAt: action.createdAt}
                ]
            }
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(t => t._id !== action._id)}
        case UPDATE_TODO_TEXT:
            return {
                ...state,
                todos: state.todos.filter(t => {
                    if (t._id === action._id) return {...t, text: action.text}
                    return t
                })
            }
        case TOGGLE_IS_COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.filter(t => {
                    if (t._id === action._id)
                        return {...t, completed: !t.isCompleted}
                    return t
                })
            }
        case TOGGLE_TODO_IS_LOADING:
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