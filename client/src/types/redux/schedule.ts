import { ScheduleType } from '../types'
import {ScheduleState} from '../../flux/reducers/schedule'

export const SET_SCHEDULES: string = '/schedule-react/schedule/SET-SCHEDULES'
export const ADD_SCHEDULE: string = '/schedule-react/schedule/ADD-SCHEDULE'
export const DELETE_SCHEDULE: string = '/schedule-react/schedule/DELETE-SCHEDULE'
export const UPDATE_SCHEDULE_TEXT: string = '/schedule-react/schedule/UPDATE-SCHEDULE-TEXT'
export const UPDATE_SCHEDULE_DATE: string = '/schedule-react/schedule/UPDATE-SCHEDULE-DATE'
export const TOGGLE_IS_FETCHING: string = '/schedule-react/schedule/TOGGLE-IS-FETCHING'
export const TOGGLE_SCHEDULE_IS_LOADING: string = '/schedule-react/schedule/TOGGLE-SCHEDULE-IS-LOADING'

type SetSchedules = {
  type: typeof SET_SCHEDULES
  schedules: Array<ScheduleType>
}
type AddScheduleSuccess = {
  type: typeof ADD_SCHEDULE
  id: string
  text: string
  date: any
}
type DeleteScheduleSuccess = {
  type: typeof DELETE_SCHEDULE
  id: string
}
type UpdateScheduleTextSuccess = {
  type: typeof UPDATE_SCHEDULE_TEXT
  id: string
  text: string
}
type UpdateScheduleDateSuccess = {
  type: typeof UPDATE_SCHEDULE_DATE
  id: string
  date: any
}
type ToggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
type ToggleScheduleIsLoading = {
  type: typeof TOGGLE_SCHEDULE_IS_LOADING
  scheduleIsLoading: boolean
  id: string
}

export type ScheduleAction = SetSchedules | AddScheduleSuccess | DeleteScheduleSuccess
  | UpdateScheduleTextSuccess | UpdateScheduleDateSuccess
  | ToggleIsFetching | ToggleScheduleIsLoading

export type ScheduleStateType = typeof ScheduleState