import schedulesApi from '../../api/schedules'
import * as scheduleType from '../types/schedule'
import * as scheduleAction from '../actions/schedule'

const initialState = {
    schedules: [],
    isFetching: false,
    schedulesIsLoading: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case scheduleType.SET_SCHEDULES:
            return {...state, schedules: action.schedules}
        case scheduleType.ADD_SCHEDULE:
            return {
                ...state,
                schedules: [
                    ...state.schedules,
                    {id: action.id, text: action.text, date: action.date}
                ]
            }
        case scheduleType.DELETE_SCHEDULE:
            return {...state, schedules: state.schedules.filter(s => s._id !== action.id)}
        case scheduleType.UPDATE_SCHEDULE_TEXT:
            return {
                ...state,
                schedules: state.schedules.map(s => {
                    if (s.id === action.id)
                        return {...s, text: action.text}
                    return s
                })
            }
        case scheduleType.UPDATE_SCHEDULE_DATE:
            return {
                ...state,
                schedules: state.schedules.map(s => {
                    if (s.id === action.id)
                        return {...s, date: action.date}
                    return s
                })
            }
        case scheduleType.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case scheduleType.TOGGLE_SCHEDULE_IS_LOADING:
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

export const requestSchedules = () => async dispatch => {
    dispatch(scheduleAction.toggleIsFetching(true))
    const data = await schedulesApi.getSchedlues()
    dispatch(scheduleAction.setSchedules(data.schedules))
    dispatch(scheduleAction.toggleIsFetching(false))
}
export const addSchedule = (text, date) => async dispatch => {
    const data = await schedulesApi.createSchedule(text, date)
    if (!data.resultCode) dispatch(scheduleAction.addScheduleSuccess(data.id, text, date))
    else console.log(data.message)
}
export const deleteSchedule = id => async dispatch => {
    dispatch(scheduleAction.toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.deleteSchedule(id)
    if (!data.resultCode) dispatch(scheduleAction.deleteScheduleSuccess(id))
    else console.log(data.message)
    dispatch(scheduleAction.toggleScheduleIsLoading(false, id))
}
export const updateScheduleText = (id, text) => async dispatch => {
    dispatch(scheduleAction.toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.updateScheduleText(id, text)
    if (!data.resultCode) dispatch(scheduleAction.updateScheduleTextSuccess(id, text))
    else console.log(data.message)
    dispatch(scheduleAction.toggleScheduleIsLoading(false, id))
}
export const updateScheduleDate = (id, date) => async dispatch => {
    dispatch(scheduleAction.toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.updateScheduleDate(id, date)
    if (!data.resultCode) dispatch(scheduleAction.updateScheduleDateSuccess(id, date))
    else console.log(data.message)
    dispatch(scheduleAction.toggleScheduleIsLoading(false, id))
}