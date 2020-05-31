import { ResultCodes } from '../api/schedules'
import { ScheduleType, TodoType } from './types'

export interface BaseResponseAPI {
  readonly resultCode: ResultCodes
  readonly message: string
  readonly e?: string
}

export interface GetIdAPI extends BaseResponseAPI {
  _id: string
}

export interface SchedulesGetAPI extends BaseResponseAPI {
  schedules: Array<ScheduleType>
}

export interface ScheduleGetAPI extends BaseResponseAPI {
  schedule: ScheduleType
}

export interface TodosGetAPI extends BaseResponseAPI {
  todos: Array<TodoType>
}

export interface TodoGetAPI extends BaseResponseAPI {
  todo: TodoType
}