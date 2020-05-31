interface Item {
  _id: string
  readonly owner?: string
  text: string
}

export interface ScheduleType extends Item {
  date: Date
}

export interface TodoType extends Item {
  isCompleted: boolean
  readonly createdAt?: any
}

export type UserType = {
  _id: string
  name: string
  surname: string
  email: string
  password: string
  schedules: Array<ScheduleType>
  todos: Array<TodoType>
}

export type ValidatorType = (value: string) => string | undefined

export type BaseFormItem = {
  text: string
  date: Date
}

export interface UpdateItemBase {
  date: Date
  owner: string
  _id: string
}