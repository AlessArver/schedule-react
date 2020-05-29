import * as authType from '../types/auth'

export const loadingUser = isLoading => ({type: authType.USER_LOADING, isLoading})
export const setAuthUser = (loggedIn, token, user) => ({
    type: authType.SET_AUTH_USER,
    loggedIn, token, user
})