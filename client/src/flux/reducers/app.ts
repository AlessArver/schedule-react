import { AppStateType, INITIALIZED_SUCCESS } from '../../types/redux/app'

export const AppState = {
    initialized: false
}

const app = (state = AppState, action: any): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export default app