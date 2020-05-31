import { ScheduleType, UpdateItemBase } from './index'

export type ScheduleOwnProps = {
  schedule: ScheduleType
  schedulesIsLoading: Array<string>
  deleteSchedule: (_id: string) => void
  updateScheduleText: (_id: string, text: string) => void
  updateScheduleDate: (_id: string, date: Date) => void
}

export type ScheduleMapStateToProps = {
  schedules: Array<ScheduleType>
  schedulesIsLoading: Array<string>
}


export type ScheduleMapDispatchToProps = {
  addSchedule: (text: string, date: Date) => void
  requestSchedules?: () => void
  deleteSchedule: (_id: string) => void
  updateScheduleText: (_id: string, text: string) => void
  updateScheduleDate: (_id: string, date: Date) => void
}

export type ScheduleProps = ScheduleMapStateToProps & ScheduleMapDispatchToProps

export interface ScheduleUpdateText extends UpdateItemBase {
  text: string
}
export interface ScheduleUpdateDate extends UpdateItemBase {
  date: Date
}

export type ScheduleUpdateTextKeys = Extract<keyof ScheduleUpdateText, string>
export type ScheduleUpdateDateKeys = Extract<keyof ScheduleUpdateDate, string>