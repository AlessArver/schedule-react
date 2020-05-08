import {combineReducers, createStore} from "redux";
import {scheduleReducer} from "./scheduleReducer";
import {todoReducer} from "./todoReducer";

const reducers = combineReducers({
    schedulesPage: scheduleReducer,
    todosPage: todoReducer
})

const store = createStore(reducers)

export default store