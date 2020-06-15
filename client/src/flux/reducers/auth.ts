import userApi from '../../api/user'
import { stopSubmit } from 'redux-form'

import { ResultCodes } from '../../types/api'
import authActions from '../actions/auth'
import loaderActions from '../actions/loader'
import toastActions from '../actions/toast'
import { InferActionsTypes, ThunkType } from '../index'
import { UserType } from '../../types'

export const initialState = {
  user: null as null | UserType,
  loggedIn: false,
  token: '' as string | null
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof authActions & typeof loaderActions & typeof toastActions>
type T = ThunkType<Actions>

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'SET_AUTH_USER':
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
export const getAuthUser = (): T => async (dispatch) => {
  const data = await userApi.getAuthUser()
  if (data.resultCode === ResultCodes.Success)
    dispatch(authActions.setAuthUser(true, data.token, data.user))
  else {
    dispatch(toastActions.setToast(true, 'toast-danger', data.message))
  }
}

export const register = (name: string, surname: string, email: string, password: string): T => async (dispatch: any) => {
  dispatch(loaderActions.toggleIsLoading(true))
  const data = await userApi.register(name, surname, email, password)
  dispatch(loaderActions.toggleIsLoading(false))
  if (data.resultCode === ResultCodes.Success) {
    dispatch(toastActions.setToast(true, 'toast-success', data.message))
  }
  else {
    dispatch(loaderActions.toggleIsLoading(false))
    dispatch(toastActions.setToast(true, 'toast-danger', data.message))
    dispatch(stopSubmit('register', {_error: data.message}))
  }
}
export const login = (email: string, password: string): T => async (dispatch: any) => {
  dispatch(loaderActions.toggleIsLoading(true))
  const data = await userApi.login(email, password)
  dispatch(loaderActions.toggleIsLoading(false))
  if (data.resultCode === ResultCodes.Success) dispatch(getAuthUser())
  else {
    dispatch(loaderActions.toggleIsLoading(false))
    dispatch(toastActions.setToast(true, 'toast-danger', data.message))
    dispatch(stopSubmit('login', {_error: data.message}))
  }
}

export const logout = (): T => async (dispatch) => {
  dispatch(loaderActions.toggleIsLoading(true))
  const data = await userApi.logout()
  if (data.resultCode === ResultCodes.Success) {
    dispatch(loaderActions.toggleIsLoading(false))
    dispatch(toastActions.setToast(true, 'toast-success', data.message))
    dispatch(authActions.setAuthUser(false, null, null))
  }
  dispatch(loaderActions.toggleIsLoading(false))
}