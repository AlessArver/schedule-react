import { InferActionsTypes } from '../index'
import { PaginatorActions } from '../actions'

const initialState = {
  currentDate: new Date()
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof PaginatorActions>

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'PAGINATOR/SET_CURRENT_DATE':
      return {...state, currentDate: action.currentDate}
    default:
      return state
  }
}