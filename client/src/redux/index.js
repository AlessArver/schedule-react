import {combineReducers, createStore} from "redux";
import scheduleReducer from "./scheduleReducer";
import  todoReducer from "./todoReducer";
import authReducder from "./authReducer";

const reducers = combineReducers({
    schedulesPage: scheduleReducer,
    todosPage: todoReducer,
    auth: authReducder
})

const store = createStore(reducers)
window.store = store

export default store