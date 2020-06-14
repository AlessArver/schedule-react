import userApi from '../../api/user'
import { ResultCodes } from '../../types/api'
import { stopSubmit } from 'redux-form'
import authActions from '../actions/auth'
import loaderActions from '../actions/loader'
import { InferActionsTypes, ThunkType } from '../index'
import { UserType } from '../../types'

export const initialState = {
  user: null as null | UserType,
  loggedIn: false,
  token: '' as string | null
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof authActions & typeof loaderActions>
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
  dispatch(loaderActions.toggleIsLoading(true))
  const data = await userApi.register(name, surname, email, password)
  dispatch(loaderActions.toggleIsLoading(false))
  if (data.resultCode === ResultCodes.Success) alert(data.message)
  else {
    dispatch(loaderActions.toggleIsLoading(false))
    alert(data.message)
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
    alert(data.message)
    dispatch(stopSubmit('login', {_error: data.message}))
  }
}

export const logout = (): T => async (dispatch) => {
  dispatch(loaderActions.toggleIsLoading(true))
  const data = await userApi.logout()
  if (data.resultCode === ResultCodes.Success) {
    dispatch(loaderActions.toggleIsLoading(false))
    alert(data.message)
    dispatch(authActions.setAuthUser(false, null, null))
  }
  dispatch(loaderActions.toggleIsLoading(false))
}