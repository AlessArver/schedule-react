import { InferActionsTypes } from '../index'
import loaderActions from '../actions/loader'

const initialState = {
  isLoading: false,
  itemsIsLoading: [] as Array<string>
}
type State = typeof initialState
type Actions = InferActionsTypes<typeof loaderActions>

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'LOADER/TOGGLE_IS_LOADING':
      return {...state, isLoading: action.isLoading}
    default:
      return state
  }
}