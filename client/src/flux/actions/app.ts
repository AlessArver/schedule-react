import { AppAction, INITIALIZED_SUCCESS } from '../../types/redux/app'

export const initializedSuccess = (): AppAction => ({type: INITIALIZED_SUCCESS})