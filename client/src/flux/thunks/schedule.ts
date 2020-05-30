import * as scheduleAction from '../actions/schedule'
import schedulesApi from '../../api/schedules'

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