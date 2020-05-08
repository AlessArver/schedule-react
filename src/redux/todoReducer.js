const ADD_TODO = "ADD-TODO"
const UPDATE_NEW_TODO = "UPDATE-NEW-TODO"
const COMPLETE_TODO = "COMPLETE-TODO"

const initialState = {
    todos: [
        {id: 1, text: "Buy Amazon company", isComplete: true},
        {id: 2, text: "Sing very cool song", isComplete: true},
        {id: 3, text: "Run 5km", isComplete: false}
    ],
    newTodoText: "",
    newTodoIsComplete: false
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            let newTodo = {
                id: 4,
                text: state.newTodoText,
                isComplete: false
            }
            let stateCopy = {...state}
            stateCopy.todos = [...state.todos]
            stateCopy.todos.push(newTodo)
            stateCopy.newTodoText = ""
            return stateCopy
        }
        case UPDATE_NEW_TODO: {
            let stateCopy = {...state}
            stateCopy.newTodoText = action.text
            return stateCopy
        }
        case COMPLETE_TODO: {
            let stateCopy = {...state}
            stateCopy.newTodoIsComplete = action.isComplete
            return stateCopy
        }
        default:
            return state
    }
}

export const addTodoAC = () => ({type: "ADD-TODO"})
export const updateNewTodoAC = text => ({type: "UPDATE-NEW-TODO", text})
export const comnpleteTodoAC = isComplete => ({type: "COMPLETE-TODO", isComplete})