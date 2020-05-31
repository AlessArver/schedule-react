import { UserType } from '../../types'
import { AuthAction, SET_AUTH_USER, USER_LOADING } from '../../types/redux/auth'

export const loadingUser = (isLoading: boolean): AuthAction => ({type: USER_LOADING, isLoading})
export const setAuthUser = (loggedIn: boolean, token: null | string, user: null | UserType): AuthAction => ({
  type: SET_AUTH_USER,
  loggedIn, token, user
})