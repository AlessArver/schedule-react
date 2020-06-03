import { UserType } from '../../types'

export default {
  loadingUser: (isLoading: boolean) => ({type: 'USER_LOADING', isLoading} as const),
  setAuthUser: (loggedIn: boolean, token: null | string, user: null | UserType) => ({
    type: 'SET_AUTH_USER',
    loggedIn, token, user
  } as const)
}