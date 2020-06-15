import { InferActionsTypes } from '../index'
import toastActions from '../actions/toast'

const initialState = {
  isToast: false,
  toastType: '',
  text: ''
}
export type ToastState = typeof initialState
type Actions = InferActionsTypes<typeof toastActions>

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