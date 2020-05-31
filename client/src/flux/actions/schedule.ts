import { ScheduleType } from '../../types'
import {
  ADD_SCHEDULE,
  DELETE_SCHEDULE, ScheduleAction,
  SET_SCHEDULES,
  TOGGLE_IS_FETCHING, TOGGLE_SCHEDULE_IS_LOADING,
  UPDATE_SCHEDULE_DATE,
  UPDATE_SCHEDULE_TEXT
} from '../../types/redux/schedule'

export const setSchedules = (schedules: Array<ScheduleType>): ScheduleAction =>
  ({type: SET_SCHEDULES, schedules})
export const addScheduleSuccess = (_id: string, text: string, date: Date): ScheduleAction =>
  ({type: ADD_SCHEDULE, _id, text, date})
export const deleteScheduleSuccess = (_id: string): ScheduleAction =>
  ({type: DELETE_SCHEDULE, _id})
export const updateScheduleTextSuccess = (_id: string, text: string): ScheduleAction =>
  ({type: UPDATE_SCHEDULE_TEXT, _id, text})
export const updateScheduleDateSuccess = (_id: string, date: Date): ScheduleAction =>
  ({type: UPDATE_SCHEDULE_DATE, _id, date})
export const toggleIsFetching = (isFetching: boolean): ScheduleAction =>
  ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleScheduleIsLoading = (scheduleIsLoading: boolean, _id: string): ScheduleAction => ({
  type: TOGGLE_SCHEDULE_IS_LOADING,
  scheduleIsLoading, _id
})