import { InferActionsTypes } from '../index'
import paginatorActions from '../actions/paginator'

const initialState = {
  currentDate: new Date()
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof paginatorActions>

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'PAGINATOR/SET_CURRENT_DATE':
      return {...state, currentDate: action.currentDate}
    default:
      return state
  }
}