import {applyMiddleware, combineReducers, createStore} from "redux";
import scheduleReducer from "./scheduleReducer";
import  todoReducer from "./todoReducer";
import authReducder from "./authReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    schedulesPage: scheduleReducer,
    todosPage: todoReducer,
    auth: authReducder
})

const store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store