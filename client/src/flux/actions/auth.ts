import {UserType} from '../../types/types';

export const USER_LOADING: string = '/schedule-react/auth/USER-LOADING'
export const SET_AUTH_USER: string = '/schedule-react/auth/USER-LOADED'
export const LOGOUT: string = '/schedule-react/auth/LOGOUT'

export type LoadingUserACType = {
    type: typeof USER_LOADING,
    isLoading: boolean
}
export const loadingUser = (isLoading: boolean): LoadingUserACType => ({type: USER_LOADING, isLoading})

export type SetAuthUserACType = {
    type: typeof SET_AUTH_USER
    loggedIn: boolean
    token: null | string
    user: null | UserType
}
export const setAuthUser = (loggedIn: boolean, token: null | string, user: null | UserType): SetAuthUserACType => ({
    type: SET_AUTH_USER,
    loggedIn, token, user
})