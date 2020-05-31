import * as scheduleAction from '../actions/schedule'
import schedulesApi, { ResultCodes } from '../../api/schedules'
import { ScheduleThunk } from '../../types/redux/schedule'

export const requestSchedules = (): ScheduleThunk => async dispatch => {
  dispatch(scheduleAction.toggleIsFetching(true))
  const data = await schedulesApi.getSchedlues()
  dispatch(scheduleAction.setSchedules(data.schedules))
  dispatch(scheduleAction.toggleIsFetching(false))
}
export const addSchedule = (text: string, date: any) => async (dispatch: any) => {
  const data = await schedulesApi.createSchedule(text, date)
  if (data.resultCode === ResultCodes.Success) dispatch(scheduleAction.addScheduleSuccess(data._id, text, date))
  else console.log(data.message)
}
export const deleteSchedule = (_id: string): ScheduleThunk => async dispatch => {
  dispatch(scheduleAction.toggleScheduleIsLoading(true, _id))
  const data = await schedulesApi.deleteSchedule(_id)
  dispatch(scheduleAction.deleteScheduleSuccess(_id))
  console.log(data)
  dispatch(scheduleAction.toggleScheduleIsLoading(false, _id))
}
export const updateScheduleText = (_id: string, text: string): ScheduleThunk => async dispatch => {
  dispatch(scheduleAction.toggleScheduleIsLoading(true, _id))
  const data = await schedulesApi.updateScheduleText(_id, text)
  if (data.resultCode === ResultCodes.Success) dispatch(scheduleAction.updateScheduleTextSuccess(_id, text))
  else console.log(data.message)
  dispatch(scheduleAction.toggleScheduleIsLoading(false, _id))
}
export const updateScheduleDate = (_id: string, date: any): ScheduleThunk => async dispatch => {
  dispatch(scheduleAction.toggleScheduleIsLoading(true, _id))
  const data = await schedulesApi.updateScheduleDate(_id, date)
  if (data.resultCode === ResultCodes.Success) dispatch(scheduleAction.updateScheduleDateSuccess(_id, date))
  else console.log(data.message)
  dispatch(scheduleAction.toggleScheduleIsLoading(false, _id))
}