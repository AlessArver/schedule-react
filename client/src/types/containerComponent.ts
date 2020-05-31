import { ScheduleType, TodoType } from './index'

export type TodoOwnProps = {}
export type ScheduleOwnProps = {}

export type TodoMapStateToProps = {
  todos: Array<TodoType>
  todosIsLoading: Array<number>
}
export type ScheduleMapStateToProps = {
  schedules: Array<ScheduleType>
  schedulesIsLoading: Array<number>
}

export type TodoMapDispatchToProps = {
  requestTodos: () => void
  addTodo: () => void
  deleteTodo: () => void
  updateTodoText: () => void
}
export type ScheduleMapDispatchToProps = {
  requestSchedules: () => void
  addSchedule: () => void
  deleteSchedule: () => void
  updateScheduleText: () => void
  updateScheduleDate: () => void
}

export type TodoProps = TodoOwnProps & TodoMapStateToProps & TodoMapDispatchToProps
export type ScheduleProps = ScheduleOwnProps & ScheduleMapStateToProps & ScheduleMapDispatchToProps