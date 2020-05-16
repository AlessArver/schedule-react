import {combineReducers, createStore} from "redux";
import scheduleReducer from "./scheduleReducer";
import  todoReducer from "./todoReducer";
import authReducder from "./authReducer";

const reducers = combineReducers({
    schedulesPage: scheduleReducer,
    todosPage: todoReducer,
    authPage: authReducder
})

const store = createStore(reducers)

export default store