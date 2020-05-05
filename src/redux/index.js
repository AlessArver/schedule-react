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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("update")
    },
    addSchedule() {
        let newSchedule = {
            id: 4,
            text: this._state.schedulesPage.newScheduleText,
            date: this._state.schedulesPage.newScheduleDate
        }

        this._state.schedulesPage.schedules.push(newSchedule)
        this._state.schedulesPage.newScheduleText = ""
        this._callSubscriber(this._state)
    },
    addTodo() {
        let newTodo = {id: 4, text: this._state.todosPage.newTodoText, isComplete: false}

        this._state.todosPage.todos.push(newTodo)
        this._state.todosPage.newTodoText = ""
        this._callSubscriber(this._state)
    },
    updateNewSchedule(newText, newDate) {
        this._state.schedulesPage.newScheduleText = newText
        this._state.schedulesPage.newScheduleDate = newDate
        this._callSubscriber(this._state)
    },
    updateNewTodoText(newText) {
        this._state.todosPage.newTodoText = newText
        this._callSubscriber(this._state)
    },
    completeTodo(newIsComplete) {
        this._state.todosPage.newTodoIsComplete = newIsComplete
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}
window.store = store

export default store