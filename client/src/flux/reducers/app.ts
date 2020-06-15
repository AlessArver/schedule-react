import { AppActions } from '../actions'
import { InferActionsTypes, ThunkType } from '../index'
import { getAuthUser } from './auth'

const initialState = {
  initialized: false
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof AppActions>
type T = ThunkType<Actions>

const app = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
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
    .then(() => dispatch(AppActions.initializedSuccess()))
}