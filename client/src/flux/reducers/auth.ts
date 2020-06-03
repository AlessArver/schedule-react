import userApi from '../../api/user'
import { ResultCodes } from '../../types/api'
import { stopSubmit } from 'redux-form'
import authActions from '../actions/auth'
import { InferActionsTypes, ThunkType } from '../index'
import { UserType } from '../../types'

export const initialState = {
  user: null as null | UserType,
  loggedIn: false,
  token: '' as string | null
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof authActions>
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
  else console.log(data.message)
}

export const register = (name: string, surname: string, email: string, password: string): T => async (dispatch: any) => {
  dispatch(authActions.loadingUser(true))
  const data = await userApi.register(name, surname, email, password)
  if (data.resultCode === ResultCodes.Success) alert(data.message)
  else {
    alert(data.message)
    dispatch(stopSubmit('register', {_error: data.message}))
  }
}
export const login = (email: string, password: string): T => async (dispatch: any) => {
  const data = await userApi.login(email, password)
  if (data.resultCode === ResultCodes.Success) dispatch(getAuthUser())
  else {
    alert(data.message)
    dispatch(stopSubmit('login', {_error: data.message}))
  }
}

export const logout = (): T => async (dispatch) => {
  const data = await userApi.logout()
  if (data.resultCode === ResultCodes.Success) {
    alert(data.message)
    dispatch(authActions.setAuthUser(false, null, null))
  }
}