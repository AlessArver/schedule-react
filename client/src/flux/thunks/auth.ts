import userApi from '../../api/user'
import * as authAction from '../actions/auth'
import { stopSubmit } from 'redux-form'
import { AuthThunk } from '../../types/redux/auth'
import { ResultCodes } from '../../types/api'

export const getAuthUser = (): AuthThunk => async (dispatch) => {
  const data = await userApi.getAuthUser()
  if (data.resultCode === ResultCodes.Success)
    dispatch(authAction.setAuthUser(true, data.token, data.user))
  else console.log(data.message)
}
// stopSubmit dispatch
export const register = (name: string, surname: string, email: string, password: string) => async (dispatch: any) => {
  dispatch(authAction.loadingUser(true))
  const data = await userApi.register(name, surname, email, password)
  if (data.resultCode === ResultCodes.Success) alert(data.message)
  else {
    alert(data.message)
    dispatch(stopSubmit('register', {_error: data.message}))
  }
}
export const login = (email: string, password: string) => async (dispatch: any) => {
  const data = await userApi.login(email, password)
  if (data.resultCode === ResultCodes.Success) dispatch(getAuthUser())
  else {
    alert(data.message)
    dispatch(stopSubmit('login', {_error: data.message}))
  }
}

export const logout = (): AuthThunk => async (dispatch) => {
  const data = await userApi.logout()
  if (data.resultCode === ResultCodes.Success) {
    alert(data.message)
    dispatch(authAction.setAuthUser(false, null, null))
  }
}