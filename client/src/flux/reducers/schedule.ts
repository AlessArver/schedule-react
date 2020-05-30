import schedulesApi from '../../api/schedules'
import * as scheduleAction from '../actions/schedule'
import {ScheduleType} from '../../types/types';

const initialState = {
    schedules: [] as Array<ScheduleType>,
    isFetching: false,
    schedulesIsLoading: [] as Array<number>
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case scheduleAction.SET_SCHEDULES:
            return {...state, schedules: action.schedules}
        case scheduleAction.ADD_SCHEDULE:
            return {
                ...state,
                schedules: [
                    ...state.schedules,
                    {_id: action.id, text: action.text, date: action.date}
                ]
            }
        case scheduleAction.DELETE_SCHEDULE:
            return {...state, schedules: state.schedules.filter(s => s._id !== action.id)}
        case scheduleAction.UPDATE_SCHEDULE_TEXT:
            return {
                ...state,
                schedules: state.schedules.map(s => {
                    if (s._id === action.id)
                        return {...s, text: action.text}
                    return s
                })
            }
        case scheduleAction.UPDATE_SCHEDULE_DATE:
            return {
                ...state,
                schedules: state.schedules.map(s => {
                    if (s._id === action.id)
                        return {...s, date: action.date}
                    return s
                })
            }
        case scheduleAction.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case scheduleAction.TOGGLE_SCHEDULE_IS_LOADING:
            return {
                ...state,
                schedulesIsLoading: action.scheduleIsLoading
                    ? [...state.schedulesIsLoading, action.id]
                    : state.schedulesIsLoading.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

export const requestSchedules = () => async (dispatch: any) => {
    dispatch(scheduleAction.toggleIsFetching(true))
    const data = await schedulesApi.getSchedlues()
    dispatch(scheduleAction.setSchedules(data.schedules))
    dispatch(scheduleAction.toggleIsFetching(false))
}
export const addSchedule = (text: string, date: any) => async (dispatch: any) => {
    const data = await schedulesApi.createSchedule(text, date)
    if (!data.resultCode) dispatch(scheduleAction.addScheduleSuccess(data.id, text, date))
    else console.log(data.message)
}
export const deleteSchedule = (id: string) => async (dispatch: any) => {
    dispatch(scheduleAction.toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.deleteSchedule(id)
    if (!data.resultCode) dispatch(scheduleAction.deleteScheduleSuccess(id))
    else console.log(data.message)
    dispatch(scheduleAction.toggleScheduleIsLoading(false, id))
}
export const updateScheduleText = (id: string, text: string) => async (dispatch: any) => {
    dispatch(scheduleAction.toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.updateScheduleText(id, text)
    if (!data.resultCode) dispatch(scheduleAction.updateScheduleTextSuccess(id, text))
    else console.log(data.message)
    dispatch(scheduleAction.toggleScheduleIsLoading(false, id))
}
export const updateScheduleDate = (id: string, date: any) => async (dispatch: any) => {
    dispatch(scheduleAction.toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.updateScheduleDate(id, date)
    if (!data.resultCode) dispatch(scheduleAction.updateScheduleDateSuccess(id, date))
    else console.log(data.message)
    dispatch(scheduleAction.toggleScheduleIsLoading(false, id))
}