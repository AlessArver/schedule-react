import Cookies from 'universal-cookie';
import userApi from "../api/user";

const cookies = new Cookies();

const USER_LOADING = "USER-LOADING"
const USER_LOADED = "USER-LOADED"
const LOGOUT = "LOGOUT"

const initialState = {
    user: null,
    loggedIn: false,
    token: "",
    isLoading: false
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
                token: action.token,
                loggedIn: true
            }
        default:
            return state
    }
}
export default authReducder

const loadingUser = isLoading => ({type: USER_LOADING, isLoading})
const loadedUser = (token, user) => ({type: USER_LOADED, token, user})

export const register = user => dispatch => {
    dispatch(loadingUser(true))
    let {name, surname, email, password} = user
    userApi.register(name, surname, email, password)
        .then(data => {
            alert(data.message)
        })
}
export const login = user => dispatch => {
    dispatch(loadingUser(true))
    userApi.login(user.email, user.password)
        .then(data => {
            dispatch(loadingUser(false))
            cookies.set("token", data.token, {path: "/"});
            let token = cookies.get("token")
            alert(data.message)
            dispatch(loadedUser(token, {user: data.user}))
        })
}