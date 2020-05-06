const ADD_SCHEDULE = "ADD-SCHEDULE"
const ADD_TODO = "ADD-TODO"
const UPDATE_NEW_SCHEDULE = "UPDATE-NEW-SCHEDULE"
const UPDATE_NEW_TODO = "UPDATE-NEW-TODO"
const COMPLETE_TODO = "COMPLETE-TODO"

const store = {
    _state: {
        schedulesPage: {
            schedules: [
                {id: 1, text: "Go to party", date: "01.05.2021"},
                {id: 2, text: "Go to Museum", date: "01.05.2021"},
                {id: 3, text: "Go to party", date: "01.05.2021"}
            ],
            newScheduleText: "",
            newScheduleDate: ""
        },
        todosPage: {
            todos: [
                {id: 1, text: "Buy Amazon company", isComplete: true},
                {id: 2, text: "Sing very cool song", isComplete: true},
                {id: 3, text: "Run 5km", isComplete: false}
            ],
            newTodoText: "",
            newTodoIsComplete: false
        }
    },
    _callSubscriber() {
        console.log("update")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_SCHEDULE:
                let newSchedule = {
                    id: 4,
                    text: this._state.schedulesPage.newScheduleText,
                    date: this._state.schedulesPage.newScheduleDate
                }

                this._state.schedulesPage.schedules.push(newSchedule)
                this._state.schedulesPage.newScheduleText = ""
                this._callSubscriber(this._state)
                break
            case ADD_TODO:
                let newTodo = {
                    id: 4,
                    text: this._state.todosPage.newTodoText,
                    isComplete: false
                }

                this._state.todosPage.todos.push(newTodo)
                this._state.todosPage.newTodoText = ""
                this._callSubscriber(this._state)
                break
            case UPDATE_NEW_SCHEDULE:
                this._state.schedulesPage.newScheduleText = action.text
                this._state.schedulesPage.newScheduleDate = action.date
                this._callSubscriber(this._state)
                break
            case UPDATE_NEW_TODO:
                this._state.todosPage.newTodoText = action.text
                this._callSubscriber(this._state)
                break
            case COMPLETE_TODO:
                this._state.todosPage.newTodoIsComplete = action.isComplete
                this._callSubscriber(this._state)
                break
        }
    }
}
window.store = store

export default store

export const addScheduleAC = () => ({type: "ADD-SCHEDULE"})
export const updateNewScheduleAC = (text, date) => ({
    type: "UPDATE-NEW-SCHEDULE",
    text,
    date
})

export const addTodoAC = () => ({type: "ADD-TODO"})
export const updateNewTodoAC = text => ({type: "UPDATE-NEW-TODO", text})
export const comnpleteTodoAC = isComplete => ({type: "COMPLETE-TODO", isComplete})