import { ScheduleType } from '../../types'
import schedulesApi from '../../api/schedules'
import { ResultCodes } from '../../types/api'
import scheduleActions from '../actions/schedule'
import { InferActionsTypes, ThunkType } from '../index'

const initialState = {
  schedules: [] as Array<ScheduleType>,
  isFetching: false,
  isLoading: false,
  schedulesIsLoading: [] as Array<string>
}
type StateType = typeof initialState
type Actions = InferActionsTypes<typeof scheduleActions>
type T = ThunkType<Actions>

export default (state = initialState, action: Actions): StateType => {
  switch (action.type) {
    case 'SET_SCHEDULES':
      return {...state, schedules: action.schedules}
    case 'ADD_SCHEDULE':
      return {
        ...state,
        schedules: [
          ...state.schedules,
          {_id: action._id, text: action.text, date: action.date}
        ]
      }
    case 'DELETE_SCHEDULE':
      return {...state, schedules: state.schedules.filter(s => s._id !== action._id)}
    case 'UPDATE_SCHEDULE_TEXT':
      return {
        ...state,
        schedules: state.schedules.map(s => {
          if (s._id === action._id)
            return {...s, text: action.text}
          return s
        })
      }
    case 'UPDATE_SCHEDULE_DATE':
      return {
        ...state,
        schedules: state.schedules.map(s => {
          if (s._id === action._id)
            return {...s, date: action.date}
          return s
        })
      }
    case 'TOGGLE_IS_FETCHING':
      return {...state, isFetching: action.isFetching}
    case 'TOGGLE_SCHEDULE_IS_LOADING':
      return {
        ...state,
        schedulesIsLoading: action.scheduleIsLoading
          ? [...state.schedulesIsLoading, action._id]
          : state.schedulesIsLoading.filter(_id => _id !== action._id)
      }
    default:
      return state
  }
}
export const requestSchedules = (): T => async dispatch => {
  dispatch(scheduleActions.toggleIsFetching(true))
  const data = await schedulesApi.getSchedlues()
  dispatch(scheduleActions.setSchedules(data.schedules))
  dispatch(scheduleActions.toggleIsFetching(false))
}

export const addSchedule = (text: string, date: Date): T => async (dispatch: any) => {
  const data = await schedulesApi.createSchedule(text, date)
  if (data.resultCode === ResultCodes.Success)
    dispatch(scheduleActions.addScheduleSuccess(data._id, text, date))
  else console.log(data.message)
}
export const deleteSchedule = (_id: string): T => async dispatch => {
  dispatch(scheduleActions.toggleScheduleIsLoading(true, _id))
  const data = await schedulesApi.deleteSchedule(_id)
  dispatch(scheduleActions.deleteScheduleSuccess(_id))
  console.log(data)
  dispatch(scheduleActions.toggleScheduleIsLoading(false, _id))
}
export const updateScheduleText = (_id: string, text: string): T => async dispatch => {
  dispatch(scheduleActions.toggleScheduleIsLoading(true, _id))
  const data = await schedulesApi.updateScheduleText(_id, text)
  if (data.resultCode === ResultCodes.Success) dispatch(scheduleActions.updateScheduleTextSuccess(_id, text))
  else console.log(data.message)
  dispatch(scheduleActions.toggleScheduleIsLoading(false, _id))
}
export const updateScheduleDate = (_id: string, date: Date): T => async dispatch => {
  dispatch(scheduleActions.toggleScheduleIsLoading(true, _id))
  const data = await schedulesApi.updateScheduleDate(_id, date)
  if (data.resultCode === ResultCodes.Success) dispatch(scheduleActions.updateScheduleDateSuccess(_id, date))
  else console.log(data.message)
  dispatch(scheduleActions.toggleScheduleIsLoading(false, _id))
}