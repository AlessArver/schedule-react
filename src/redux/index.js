import {combineReducers, createStore} from "redux";
import {scheduleReducer} from "./scheduleReducer";
import {todoReducer} from "./todoReducer";

const reducers = combineReducers({
    scheduleReducer,
    todoReducer
})

const store = createStore(reducers)

export default store