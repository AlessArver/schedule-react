import {applyMiddleware, combineReducers, createStore} from "redux";
import scheduleReducer from "./reducers/schedule";
import todo from "./reducers/todo";
import authReducder from "./reducers/auth";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import app from "./reducers/app";

const reducers = combineReducers({
    app: app,
    schedulesPage: scheduleReducer,
    todosPage: todo,
    auth: authReducder,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
window._store = store

export default store