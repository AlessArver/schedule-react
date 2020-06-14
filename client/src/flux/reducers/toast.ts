import { InferActionsTypes } from '../index'
import toastActions from '../actions/alert'

const initialState = {
  isToast: false,
  text: ''
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof toastActions>

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'TOAST/TOGGLE_SHOW_TOAST':
      return {...state, isToast: action.isToast}
    default:
      return state
  }
}