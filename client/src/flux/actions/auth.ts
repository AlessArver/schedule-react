import { UserType } from '../../types'

export default {
  setAuthUser: (loggedIn: boolean, token: null | string, user: null | UserType) => ({
    type: 'AUTH/SET_AUTH_USER',
    loggedIn, token, user
  } as const)
}