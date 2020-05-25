const ADD_TODO = "ADD-TODO"
const UPDATE_TODO_TEXT = "UPDATE-TODO-TEXT"
const TOGGLE_IS_COMPLETED_TODO = "TOGGLE-IS-COMPLETED-TODO"
const TOGGLE_IS_COMPLETED_IN_PROGRESS = "TOGGLE-IS-COMPLETED-IN-PROGRESS"

const initialState = {
    todos: [
        {id: 1, text: "Buy Amazon company", completed: true},
        {id: 2, text: "Sing very cool song", completed: true},
        {id: 3, text: "Run 5km", completed: false}
    ],
    completedInProgress: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                newTodoText: "",
                todos: [
                    ...state.todos,
                    {
                        id: 4,
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case UPDATE_TODO_TEXT:
            return {...state, text: action.text}
        case TOGGLE_IS_COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.map(t => {
                    if (t.id === action.id)
                        return {...t, completed: !t.completed}
                    return t
                })
            }
        case TOGGLE_IS_COMPLETED_IN_PROGRESS:
            return {
                ...state,
                completedInProgress: action.completedInProgress
                    ? [...state.completedInProgress, action.id]
                    : state.completedInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}
export default todoReducer

export const addTodo = text => ({type: "ADD-TODO", text})
export const updateText = text => ({type: "UPDATE-NEW-TODO", text})
export const toggleIsCompletedSuccess = id => ({type: "COMPLETED-TODO", id})
export const completedInProgress = (completedInProgress, id) => ({
    type: TOGGLE_IS_COMPLETED_IN_PROGRESS,
    completedInProgress, id
})