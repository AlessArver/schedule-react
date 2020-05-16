const USER_LOADING = "USER-LOADING"
const USER_LOADED = "USER-LOADED"
const REGISTER = "REGISTER"
const REGISTER_FAIL = "REGISTER-FAIL"
const LOGOUT = "LOGOUT"
const UPDATE_NEW_USER_EMAIL = "UPDATE-NEW-USER-EMAIL"
const UPDATE_NEW_USER_PASSWORD = "UPDATE-NEW-USER-PASSWORD"

const initialState = {
    user: null,
    loggedIn: false,
    token: "",
    isLoading: false,
    newUserEmail: "",
    newUserPassword: ""
}

const authReducder = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case USER_LOADED:
            return {
                ...state,
                ...action.user,
                loggedIn: true
            }
        case REGISTER:
            return {
                ...state,
                ...action.user,
                loggedIn: true
            }
        case REGISTER_FAIL:
            return {
                ...state,
                loggedIn: false,
                token: null,
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

export const loadingUser = isLoading => ({type: USER_LOADING, isLoading})
export const loadedUser = user => ({type: USER_LOADED, user})
export const registerUser = (user) => ({type: REGISTER, user})
export const updateNewUserEmail = text => ({type: UPDATE_NEW_USER_EMAIL, text})
export const updateNewUserPassword = text => ({type: UPDATE_NEW_USER_PASSWORD, text})