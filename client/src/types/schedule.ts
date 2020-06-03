import { ScheduleType, UpdateItemBase } from './index'

export type ownProps = {
  schedule: ScheduleType
  schedulesIsLoading: Array<string>
  deleteSchedule: (_id: string) => void
  updateScheduleText: (_id: string, text: string) => void
  updateScheduleDate: (_id: string, date: Date) => void
}

export type mapStateToProps = {
  schedules: Array<ScheduleType>
  schedulesIsLoading: Array<string>
}


export type mapDispatchToProps = {
  addSchedule: (text: string, date: Date) => void
  requestSchedules?: () => void
  deleteSchedule: (_id: string) => void
  updateScheduleText: (_id: string, text: string) => void
  updateScheduleDate: (_id: string, date: Date) => void
}

export type storeProps = mapStateToProps & mapDispatchToProps

export interface updateText extends UpdateItemBase {
  text: string
}
export interface updateDate extends UpdateItemBase {
  date: Date
}

export type updateTextKeys = Extract<keyof updateText, string>
export type updateDateKeys = Extract<keyof updateDate, string>