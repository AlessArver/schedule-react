import Cookies from 'universal-cookie';
import userApi from "../api/user";
import {stopSubmit} from "redux-form";
import userAuthApi from "../api/userAuth";

const cookies = new Cookies();

const USER_LOADING = "USER-LOADING"
const SET_AUTH_USER = "USER-LOADED"
const LOGOUT = "LOGOUT"

const initialState = {
    user: null,
    loggedIn: false,
    token: ""
}

const authReducder = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                user: action.user,
                token: action.token,
                loggedIn: action.loggedIn
            }
        default:
            return state
    }
}
export default authReducder

const loadingUser = isLoading => ({type: USER_LOADING, isLoading})
const setAuthUser = (loggedIn, token, user) => ({
    type: SET_AUTH_USER,
    loggedIn, token, user
})

export const getAuthUser = () => dispatch => {
    return userApi.getAuthUser()
        .then(data => {
            if (data.resultCode === 0)
                dispatch(setAuthUser(true, data.token, data.user))
            else alert(data.message)
        })
}
export const register = user => dispatch => {
    dispatch(loadingUser(true))
    let {name, surname, email, password} = user
    userApi.register(name, surname, email, password)
        .then(data => {
            if (!data.resultCode) alert(data.message)
            else {
                alert(data.message)
                dispatch(stopSubmit("register", {_error: data.message}))
            }
        })
}
export const login = user => dispatch => {
    userApi.login(user.email, user.password)
        .then(data => {
            if (data.resultCode === 0) dispatch(getAuthUser())
             else {
                alert(data.message)
                dispatch(stopSubmit("login", {_error: data.message}))
            }
        })
}
export const logout = () => dispatch => {
    userApi.logout()
        .then(data => {
            if (data.resultCode === 0) {
                alert(data.message)
                dispatch(setAuthUser(false, null, null))
            }
        })
}