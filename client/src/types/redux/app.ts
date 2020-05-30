import { ThunkAction } from 'redux-thunk'
import { AppState } from '../../flux/reducers/app'

export const INITIALIZED_SUCCESS: string = '/schedule-react/app/INITIALIZED-SUCCESS'

type InitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS
}
export type AppAction = InitializedSuccess

// export type ThunkType = ThunkAction<Promise<void>, AppState, unknown, AppActions>

export type AppStateType = typeof AppState