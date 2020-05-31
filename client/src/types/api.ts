import { ScheduleType, TodoType, UserType } from './index'

export enum ResultCodes {
  Success = 0,
  Error = 1
}

export interface BaseResponseAPI {
  readonly resultCode: ResultCodes
  readonly message: string
  readonly e?: {
    name: string
    message: string
  }
}

export interface GetIdAPI extends BaseResponseAPI {
  _id: string
}

export interface SchedulesGetAPI extends BaseResponseAPI {
  schedules: Array<ScheduleType>
}
export interface TodosGetAPI extends BaseResponseAPI {
  todos: Array<TodoType>
}

export interface ScheduleGetAPI extends BaseResponseAPI {
  schedule: ScheduleType
}
export interface TodoGetAPI extends BaseResponseAPI {
  todo: TodoType
}
export interface UserGetAPI extends BaseResponseAPI {
  user: UserType
  token: string
}

