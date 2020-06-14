interface Item {
  _id: string
  readonly owner?: string
  text: string
}

export interface ScheduleType extends Item {
  createdAt: any
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
}

export type ValidatorType = (value: string) => string | undefined

export type BaseFormItem = {
  text: string
  date: Date
}
export type BaseFormItemKeys = keyof BaseFormItem

export interface UpdateItemBase {
  date: Date
  owner: string
  _id: string
}