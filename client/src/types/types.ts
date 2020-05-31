export type ScheduleType = {
    _id: string
    readonly owner?: string
    text: string
    date: any
}
export type TodoType = {
    _id: string
    readonly owner?: string
    text: string
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