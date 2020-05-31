import userApi from '../../api/user'
import * as authAction from '../actions/auth'
import { UserType } from '../../types/types'
import { stopSubmit } from 'redux-form'
import { AuthThunk } from '../../types/redux/auth'

export const getAuthUser = (): AuthThunk => async (dispatch) => {
  const data = await userApi.getAuthUser()
  if (data.resultCode === 0)
    dispatch(authAction.setAuthUser(true, data.token, data.user))
  else console.log(data.message)
}
// stopSubmit dispatch
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

export const logout = (): AuthThunk => async (dispatch) => {
  const data = await userApi.logout()
  if (data.resultCode === 0) {
    alert(data.message)
    dispatch(authAction.setAuthUser(false, null, null))
  }
}