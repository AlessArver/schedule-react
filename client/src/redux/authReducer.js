import userApi from '../api/user';
import {stopSubmit} from 'redux-form';

const USER_LOADING = 'USER-LOADING'
const SET_AUTH_USER = 'USER-LOADED'
const LOGOUT = 'LOGOUT'

const initialState = {
    user: null,
    loggedIn: false,
    token: ''
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

export const getAuthUser = () => async dispatch => {
    const data = await userApi.getAuthUser()
    if (data.resultCode === 0)
        dispatch(setAuthUser(true, data.token, data.user))
    else console.log(data.message)
}
export const register = user => async dispatch => {
    dispatch(loadingUser(true))
    let {name, surname, email, password} = user
    const data = await userApi.register(name, surname, email, password)
    if (!data.resultCode) alert(data.message)
    else {
        alert(data.message)
        dispatch(stopSubmit('register', {_error: data.message}))
    }
}
export const login = user => async dispatch => {
    const data = await userApi.login(user.email, user.password)
    if (data.resultCode === 0) dispatch(getAuthUser())
    else {
        alert(data.message)
        dispatch(stopSubmit('login', {_error: data.message}))
    }
}
export const logout = () => async dispatch => {
    const data = await userApi.logout()
    if (data.resultCode === 0) {
        alert(data.message)
        dispatch(setAuthUser(false, null, null))
    }
}