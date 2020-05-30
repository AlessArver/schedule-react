import { AuthStateType, SET_AUTH_USER } from '../../types/redux/auth'

export const AuthState: AuthStateType = {
    user: null,
    loggedIn: false,
    token: ''
}

export default (state = AuthState, action: any): AuthStateType => {
    switch (action.type) {
        case SET_AUTH_USER:
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