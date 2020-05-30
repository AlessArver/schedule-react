import { ScheduleType } from '../../types/types'
import {
  ADD_SCHEDULE,
  DELETE_SCHEDULE, ScheduleStateType,
  SET_SCHEDULES, TOGGLE_IS_FETCHING, TOGGLE_SCHEDULE_IS_LOADING,
  UPDATE_SCHEDULE_DATE,
  UPDATE_SCHEDULE_TEXT
} from '../../types/redux/schedule'

export const ScheduleState = {
  schedules: [] as Array<ScheduleType>,
  isFetching: false,
  schedulesIsLoading: [] as Array<number>
}

export default (state = ScheduleState, action: any): ScheduleStateType => {
  switch (action.type) {
    case SET_SCHEDULES:
      return {...state, schedules: action.schedules}
    case ADD_SCHEDULE:
      return {
        ...state,
        schedules: [
          ...state.schedules,
          {_id: action.id, text: action.text, date: action.date}
        ]
      }
    case DELETE_SCHEDULE:
      return {...state, schedules: state.schedules.filter(s => s._id !== action.id)}
    case UPDATE_SCHEDULE_TEXT:
      return {
        ...state,
        schedules: state.schedules.map(s => {
          if (s._id === action.id)
            return {...s, text: action.text}
          return s
        })
      }
    case UPDATE_SCHEDULE_DATE:
      return {
        ...state,
        schedules: state.schedules.map(s => {
          if (s._id === action.id)
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