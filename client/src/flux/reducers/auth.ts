import userApi from '../../api/user'
import * as authAction from '../actions/auth'
import {stopSubmit} from 'redux-form'
import {UserType} from '../../types/types';

type InitialStateType = {
    user: Array<UserType> | null
    loggedIn: boolean
    token:  null | string
}
const initialState: InitialStateType = {
    user: null,
    loggedIn: false,
    token: ''
}

export default (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case authAction.SET_AUTH_USER:
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

export const getAuthUser = () => async (dispatch: any) => {
    const data = await userApi.getAuthUser()
    if (data.resultCode === 0)
        dispatch(authAction.setAuthUser(true, data.token, data.user))
    else console.log(data.message)
}
export const register = (user: UserType) => async (dispatch: any) => {
    dispatch(authAction.loadingUser(true))
    let {name, surname, email, password} = user
    const data = await userApi.register(name, surname, email, password)
    if (!data.resultCode) alert(data.message)
    else {
        alert(data.message)
        dispatch(stopSubmit('register', {_error: data.message}))
    }
}
export const login = (user: UserType) => async (dispatch: any) => {
    const data = await userApi.login(user.email, user.password)
    if (data.resultCode === 0) dispatch(getAuthUser())
    else {
        alert(data.message)
        dispatch(stopSubmit('login', {_error: data.message}))
    }
}
export const logout = () => async (dispatch: any) => {
    const data = await userApi.logout()
    if (data.resultCode === 0) {
        alert(data.message)
        dispatch(authAction.setAuthUser(false, null, null))
    }
}