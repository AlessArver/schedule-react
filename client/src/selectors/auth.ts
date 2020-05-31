import { RootState } from '../flux'

export const getUser = (state: RootState) => state.auth.user

export const getLoggedIn = (state: RootState) => state.auth.loggedIn

export const getToken = (state: RootState) => state.auth.token