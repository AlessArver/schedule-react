import { UserType } from '../types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../flux'

export const USER_LOADING: string = '/schedule-react/auth/USER-LOADING'
export const SET_AUTH_USER: string = '/schedule-react/auth/USER-LOADED'

type LoadingUser = {
  readonly type: typeof USER_LOADING,
  isLoading: boolean
}
type SetAuthUser = {
  readonly type: typeof SET_AUTH_USER
  loggedIn: boolean
  token: null | string
  user: null | UserType
}

export type AuthAction = LoadingUser | SetAuthUser

export type AuthStateType = {
  user: Array<UserType> | null
  loggedIn: boolean
  token:  null | string
}

export type AuthThunk = ThunkAction<Promise<void>, RootState, unknown, AuthAction>