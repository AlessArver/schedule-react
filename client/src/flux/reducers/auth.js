import userApi from '../../api/user'
import * as authActions from '../actions/auth'
import {stopSubmit} from 'redux-form'
import * as authType from '../types/auth'

const initialState = {
    user: null,
    loggedIn: false,
    token: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authType.SET_AUTH_USER:
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

export const getAuthUser = () => async dispatch => {
    const data = await userApi.getAuthUser()
    if (data.resultCode === 0)
        dispatch(authActions.setAuthUser(true, data.token, data.user))
    else console.log(data.message)
}
export const register = user => async dispatch => {
    dispatch(authActions.loadingUser(true))
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
        dispatch(authActions.setAuthUser(false, null, null))
    }
}