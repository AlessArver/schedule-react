const ADD_TODO = "ADD-TODO"
const UPDATE_NEW_TODO = "UPDATE-NEW-TODO"
const COMPLETE_TODO = "COMPLETE-TODO"

const initialState = {
    todos: [
        {id: 1, text: "Buy Amazon company", complete: true},
        {id: 2, text: "Sing very cool song", complete: true},
        {id: 3, text: "Run 5km", complete: false}
    ],
    newTodoText: ""
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
                        text: state.newTodoText,
                        complete: false
                    }
                ]
            }
        case UPDATE_NEW_TODO:
            return {...state, newTodoText: action.text}
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(t => {
                    if (t.id === action.id)
                        return {...t, complete: !t.complete}
                    return t
                })
            }
        default:
            return state
    }
}
export default todoReducer

export const addTodoAC = () => ({type: "ADD-TODO"})
export const updateNewTodoAC = text => ({type: "UPDATE-NEW-TODO", text})
export const completeTodoAC = id => ({type: "COMPLETE-TODO", id})