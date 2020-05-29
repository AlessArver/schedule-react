export type ScheduleType = {
    _id: string
    owner: string,
    text: string,
    date: any
}
export type TodoType = {
    _id: string
    owner: string
    text: string
    isCompleted: boolean
    createdAt: any
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