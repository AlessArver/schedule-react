import {useCookies} from 'react-cookie';

const USER_LOADING = "USER-LOADING"
const USER_LOADED = "USER-LOADED"
const REGISTER = "REGISTER"
const REGISTER_FAIL = "REGISTER-FAIL"
const LOGOUT = "LOGOUT"
const UPDATE_NEW_USER_EMAIL = "UPDATE-NEW-USER-EMAIL"
const UPDATE_NEW_USER_PASSWORD = "UPDATE-NEW-USER-PASSWORD"

const initialState = {
    loggedIn: false,
    token: "",
    isLoading: false,
    user: {
        id: "",
        name: "",
        surname: "",
        email: "",
        password: ""
    },
    newUserEmail: "",
    newUserPassword: ""
}

const authReducder = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                loggedIn: true,
                token: action.token,
                isLoading: false,
                user: action.user,
            }
        case REGISTER:
            return {
                ...state,
                ...action.user,
                token: action.token,
                loggedIn: true,
                isLoading: false
            }
        case REGISTER_FAIL:
            return {
                ...state,
                loggedIn: false,
                token: null,
                isLoading: false,
                user: null
            }
        case UPDATE_NEW_USER_EMAIL:
            return {...state, newUserEmail: action.text}
        case UPDATE_NEW_USER_PASSWORD:
            return {...state, newUserPassword: action.text}
        default:
            return state
    }
}
export default authReducder

export const loadingUser = () => ({type: USER_LOADING})
export const loadedUser = (token, user) => ({type: USER_LOADED, token, user})
export const registerUser = (token, user) => ({type: REGISTER, token, user})
export const updateNewUserEmail = text => ({type: UPDATE_NEW_USER_EMAIL, text})
export const updateNewUserPassword = text => ({type: UPDATE_NEW_USER_PASSWORD, text})