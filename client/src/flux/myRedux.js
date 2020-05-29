import {scheduleReducer} from "./reducers/schedule";
import {todo} from "./reducers/todo";

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
        this._state.schedulesPage = scheduleReducer(this._state.schedulesPage, action)
        this._state.todosPage = todoReducer(this._state.todosPage, action)
        this._callSubscriber(this._state)
    }
}
window.store = store

export default store