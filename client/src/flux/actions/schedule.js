import * as scheduleType from '../types/schedule'

export const setSchedules = schedules => ({type: scheduleType.SET_SCHEDULES, schedules})
export const addScheduleSuccess = (id, text, date) => ({type: scheduleType.ADD_SCHEDULE, id, text, date})
export const deleteScheduleSuccess = id => ({type: scheduleType.DELETE_SCHEDULE, id})
export const updateScheduleTextSuccess = (id, text) => ({type: scheduleType.UPDATE_SCHEDULE_TEXT, id, text})
export const updateScheduleDateSuccess = date => ({type: scheduleType.UPDATE_SCHEDULE_DATE, date})
export const toggleIsFetching = isFetching => ({type: scheduleType.TOGGLE_IS_FETCHING, isFetching})
export const toggleScheduleIsLoading = (scheduleIsLoading, id) => ({
    type: scheduleType.TOGGLE_SCHEDULE_IS_LOADING,
    scheduleIsLoading, id
})