import {getAuthUser} from './auth'
import * as appAction from '../actions/app'

const initialState = {
    initialized: false
}
type InitialStateType = typeof initialState

const app = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case appAction.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export default app

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUser())
        .then(() => dispatch(appAction.initializedSuccess()))
}