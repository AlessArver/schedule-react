const USER_LOADING = "USER-LOADING"
const USER_LOADED = "USER-LOADED"
const REGISTER = "REGISTER"
const LOGOUT = "LOGOUT"

const UPDATE_NEW_USER_NAME = "UPDATE-NEW-USER-NAME"
const UPDATE_NEW_USER_SURNAME = "UPDATE-NEW-USER-SURNAME"
const UPDATE_NEW_USER_EMAIL = "UPDATE-NEW-USER-EMAIL"
const UPDATE_NEW_USER_PASSWORD = "UPDATE-NEW-USER-PASSWORD"

const initialState = {
    user: null,
    loggedIn: false,
    token: "",
    isLoading: false,
    newUserName: "",
    newUserSurname: "",
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
                loggedIn: true,
                newUserEmail: "",
                newUserPassword: ""
            }
        case REGISTER:
            return {
                ...state,
                newUserName: "",
                newUserSurname: "",
                newUserEmail: "",
                newUserPassword: ""
            }
        case UPDATE_NEW_USER_NAME:
            return {...state, newUserName: action.text}
        case UPDATE_NEW_USER_SURNAME:
            return {...state, newUserSurname: action.text}
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
export const loadedUser = (user) => ({type: USER_LOADED, user})
export const registerUser = () => ({type: REGISTER})
export const updateNewUserName = text => ({type: UPDATE_NEW_USER_NAME, text})
export const updateNewUserSurname = text => ({type: UPDATE_NEW_USER_SURNAME, text})
export const updateNewUserEmail = text => ({type: UPDATE_NEW_USER_EMAIL, text})
export const updateNewUserPassword = text => ({type: UPDATE_NEW_USER_PASSWORD, text})