import { InferActionsTypes } from '../index'
import { ToastActions } from '../actions'

const initialState = {
  isToast: false,
  toastType: '',
  text: ''
}
export type ToastState = typeof initialState
type Actions = InferActionsTypes<typeof ToastActions>

export default (state = initialState, action: Actions): ToastState => {
  switch (action.type) {
    case 'TOAST/SET_TOAST':
      return {
        ...state,
        isToast: action.isToast,
        toastType: action.toastType,
        text: action.text
      }
    default:
      return state
  }
}