import schedulesApi from '../api/schedules'

const SET_SCHEDULES = 'SET-SCHEDULES'
const ADD_SCHEDULE = 'ADD-SCHEDULE'
const DELETE_SCHEDULE = 'DELETE-SCHEDULE'
const UPDATE_SCHEDULE_TEXT = 'UPDATE-SCHEDULE-TEXT'
const UPDATE_SCHEDULE_DATE = 'UPDATE-SCHEDULE-DATE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_SCHEDULE_IS_LOADING = 'TOGGLE-SCHEDULE-IS-LOADING'


const initialState = {
    schedules: [],
    isFetching: false,
    schedulesIsLoading: []
}

const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCHEDULES:
            return {...state, schedules: action.schedules}
        case ADD_SCHEDULE:
            return {
                ...state,
                schedules: [
                    ...state.schedules,
                    {id: action.id, text: action.text, date: action.date}
                ]
            }
        case DELETE_SCHEDULE:
            return {...state, schedules: state.schedules.filter(s => s._id !== action.id)}
        case UPDATE_SCHEDULE_TEXT:
            return {
                ...state,
                schedules: state.schedules.map(s => {
                    if (s.id === action.id)
                        return {...s, text: action.text}
                    return s
                })
            }
        case UPDATE_SCHEDULE_DATE:
            return {
                ...state,
                schedules: state.schedules.map(s => {
                    if (s.id === action.id)
                        return {...s, date: action.date}
                    return s
                })
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_SCHEDULE_IS_LOADING:
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
export default scheduleReducer

const setSchedules = schedules => ({type: SET_SCHEDULES, schedules})
const addScheduleSuccess = (id, text, date) => ({type: ADD_SCHEDULE, id, text, date})
const deleteScheduleSuccess = id => ({type: DELETE_SCHEDULE, id})
const updateScheduleTextSuccess = (id, text) => ({type: UPDATE_SCHEDULE_TEXT, id, text})
const updateScheduleDateSuccess = date => ({type: UPDATE_SCHEDULE_DATE, date})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
const toggleScheduleIsLoading = (scheduleIsLoading, id) => ({
    type: TOGGLE_SCHEDULE_IS_LOADING,
    scheduleIsLoading, id
})

export const requestSchedules = () => async dispatch => {
    dispatch(toggleIsFetching(true))
    const data = await schedulesApi.getSchedlues()
    dispatch(setSchedules(data.schedules))
    dispatch(toggleIsFetching(false))
}
export const addSchedule = (text, date) => async dispatch => {
    const data = await schedulesApi.createSchedule(text, date)
    if (!data.resultCode) dispatch(addScheduleSuccess(data.id, text, date))
    else console.log(data.message)
}
export const deleteSchedule = id => async dispatch => {
    dispatch(toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.deleteSchedule(id)
    if (!data.resultCode) dispatch(deleteScheduleSuccess(id))
    else console.log(data.message)
    dispatch(toggleScheduleIsLoading(false, id))
}
export const updateScheduleText = (id, text) => async dispatch => {
    dispatch(toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.updateScheduleText(id, text)
    if (!data.resultCode) dispatch(updateScheduleTextSuccess(id, text))
    else console.log(data.message)
    dispatch(toggleScheduleIsLoading(false, id))
}
export const updateScheduleDate = (id, date) => async dispatch => {
    dispatch(toggleScheduleIsLoading(true, id))
    const data = await schedulesApi.updateScheduleDate(id, date)
    if (!data.resultCode) dispatch(updateScheduleDateSuccess(id, date))
    else console.log(data.message)
    dispatch(toggleScheduleIsLoading(false, id))
}