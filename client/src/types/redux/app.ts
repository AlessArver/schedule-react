import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../flux'
import { AppState } from '../../flux/reducers/app'

export const INITIALIZED_SUCCESS: string = '/schedule-react/app/INITIALIZED-SUCCESS'

type InitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS
}
export type AppStateType = typeof AppState
export type AppAction = InitializedSuccess

export type AppThunk = ThunkAction<Promise<void>, RootState, unknown, AppAction>