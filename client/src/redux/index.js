import {applyMiddleware, combineReducers, createStore} from "redux";
import scheduleReducer from "./scheduleReducer";
import todoReducer from "./todoReducer";
import authReducder from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";

const reducers = combineReducers({
    app: appReducer,
    schedulesPage: scheduleReducer,
    todosPage: todoReducer,
    auth: authReducder,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store