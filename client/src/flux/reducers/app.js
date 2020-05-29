import {getAuthUser} from './auth'
import * as appType from '../types/app'
import * as appAction from '../actions/app'

const initialState = {
    initialized: false
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case appType.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export default app

export const initializeApp = () => dispatch => {
    dispatch(getAuthUser())
        .then(() => dispatch(appAction.initializedSuccess()))
}