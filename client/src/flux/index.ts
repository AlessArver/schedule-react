import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import scheduleReducer from "./reducers/schedule";
import todo from "./reducers/todo";
import authReducder from "./reducers/auth";
import thunk, { ThunkAction } from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import app from "./reducers/app";

const rootReducer = combineReducers({
    app: app,
    schedulesPage: scheduleReducer,
    todosPage: todo,
    auth: authReducder,
    form: formReducer
})
type RootReducerType = typeof rootReducer
export type RootState = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// @ts-ignore
window._store = store

export default store