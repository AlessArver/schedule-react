import {ScheduleType} from '../../types/types';

export const SET_SCHEDULES: string = '/schedule-react/schedule/SET-SCHEDULES'
export const ADD_SCHEDULE: string = '/schedule-react/schedule/ADD-SCHEDULE'
export const DELETE_SCHEDULE: string = '/schedule-react/schedule/DELETE-SCHEDULE'
export const UPDATE_SCHEDULE_TEXT: string = '/schedule-react/schedule/UPDATE-SCHEDULE-TEXT'
export const UPDATE_SCHEDULE_DATE: string = '/schedule-react/schedule/UPDATE-SCHEDULE-DATE'
export const TOGGLE_IS_FETCHING: string = '/schedule-react/schedule/TOGGLE-IS-FETCHING'
export const TOGGLE_SCHEDULE_IS_LOADING: string = '/schedule-react/schedule/TOGGLE-SCHEDULE-IS-LOADING'

export type SetSchedulesACType = {
    type: typeof SET_SCHEDULES
    schedules: Array<ScheduleType>
}
export type AddScheduleSuccessACType = {
    type: typeof ADD_SCHEDULE
    id: string
    text: string
    date: any
}
export type DeleteScheduleSuccessACType = {
    type: typeof DELETE_SCHEDULE
    id: string
}
export type UpdateScheduleTextSuccessACType = {
    type: typeof UPDATE_SCHEDULE_TEXT
    id: string
    text: string
}
export type UpdateScheduleDateSuccessACType = {
    type: typeof UPDATE_SCHEDULE_DATE
    id: string
    date: any
}
export type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export type ToggleScheduleIsLoadingACType = {
    type: typeof TOGGLE_SCHEDULE_IS_LOADING
    scheduleIsLoading: boolean
    id: string
}

export const setSchedules = (schedules: Array<ScheduleType>): SetSchedulesACType =>
    ({type: SET_SCHEDULES, schedules})
export const addScheduleSuccess = (id: string, text: string, date: any): AddScheduleSuccessACType =>
    ({type: ADD_SCHEDULE, id, text, date})
export const deleteScheduleSuccess = (id: string): DeleteScheduleSuccessACType =>
    ({type: DELETE_SCHEDULE, id})
export const updateScheduleTextSuccess = (id: string, text: string): UpdateScheduleTextSuccessACType =>
    ({type: UPDATE_SCHEDULE_TEXT, id, text})
export const updateScheduleDateSuccess = (id: string, date: any): UpdateScheduleDateSuccessACType =>
    ({type: UPDATE_SCHEDULE_DATE, id, date})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType =>
    ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleScheduleIsLoading = (scheduleIsLoading: boolean, id: string): ToggleScheduleIsLoadingACType => ({
    type: TOGGLE_SCHEDULE_IS_LOADING,
    scheduleIsLoading, id
})