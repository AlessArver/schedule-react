import { UserType } from '../types'

export const USER_LOADING: string = '/schedule-react/auth/USER-LOADING'
export const SET_AUTH_USER: string = '/schedule-react/auth/USER-LOADED'

type LoadingUser = {
  type: typeof USER_LOADING,
  isLoading: boolean
}
type SetAuthUser = {
  type: typeof SET_AUTH_USER
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