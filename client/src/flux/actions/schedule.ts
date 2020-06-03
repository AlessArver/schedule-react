import { ScheduleType } from '../../types'

export default {
  setSchedules: (schedules: Array<ScheduleType>) =>
    ({type: 'SET_SCHEDULES', schedules} as const),
  addScheduleSuccess: (_id: string, text: string, date: Date) =>
    ({type: 'ADD_SCHEDULE', _id, text, date} as const),
  deleteScheduleSuccess: (_id: string) =>
    ({type: 'DELETE_SCHEDULE', _id} as const),
  updateScheduleTextSuccess: (_id: string, text: string) =>
    ({type: 'UPDATE_SCHEDULE_TEXT', _id, text} as const),
  updateScheduleDateSuccess: (_id: string, date: Date) =>
    ({type: 'UPDATE_SCHEDULE_DATE', _id, date} as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
  toggleScheduleIsLoading: (scheduleIsLoading: boolean, _id: string) => ({
    type: 'TOGGLE_SCHEDULE_IS_LOADING', scheduleIsLoading, _id
  } as const)
}