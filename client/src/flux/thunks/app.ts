import { getAuthUser } from './auth'
import * as appAction from '../actions/app'

export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUser())
    .then(() => dispatch(appAction.initializedSuccess()))
}