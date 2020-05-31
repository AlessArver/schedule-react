import { ScheduleType } from '../index'
import {ScheduleState} from '../../flux/reducers/schedule'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../flux'

export const SET_SCHEDULES: string = '/schedule-react/schedule/SET-SCHEDULES'
export const ADD_SCHEDULE: string = '/schedule-react/schedule/ADD-SCHEDULE'
export const DELETE_SCHEDULE: string = '/schedule-react/schedule/DELETE-SCHEDULE'
export const UPDATE_SCHEDULE_TEXT: string = '/schedule-react/schedule/UPDATE-SCHEDULE-TEXT'
export const UPDATE_SCHEDULE_DATE: string = '/schedule-react/schedule/UPDATE-SCHEDULE-DATE'
export const TOGGLE_IS_FETCHING: string = '/schedule-react/schedule/TOGGLE-IS-FETCHING'
export const TOGGLE_SCHEDULE_IS_LOADING: string = '/schedule-react/schedule/TOGGLE-SCHEDULE-IS-LOADING'

type SetSchedules = {
  readonly type: typeof SET_SCHEDULES
  schedules: Array<ScheduleType>
}
type AddScheduleSuccess = {
  readonly type: typeof ADD_SCHEDULE
  _id: string
  text: string
  date: Date
}
type DeleteScheduleSuccess = {
  readonly type: typeof DELETE_SCHEDULE
  _id: string
}
type UpdateScheduleTextSuccess = {
  readonly type: typeof UPDATE_SCHEDULE_TEXT
  _id: string
  text: string
}
type UpdateScheduleDateSuccess = {
  readonly type: typeof UPDATE_SCHEDULE_DATE
  _id: string
  date: Date
}
type ToggleIsFetching = {
  readonly type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
type ToggleScheduleIsLoading = {
  readonly type: typeof TOGGLE_SCHEDULE_IS_LOADING
  scheduleIsLoading: boolean
  readonly _id: string
}

export type ScheduleAction = SetSchedules | AddScheduleSuccess | DeleteScheduleSuccess
  | UpdateScheduleTextSuccess | UpdateScheduleDateSuccess
  | ToggleIsFetching | ToggleScheduleIsLoading

export type ScheduleStateType = typeof ScheduleState

export type ScheduleThunk = ThunkAction<Promise<void>, RootState, unknown, ScheduleAction>