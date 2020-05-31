import { TodoType, UpdateItemBase } from './index'

export type TodoOwnProps = {
  todo: TodoType
  todosIsLoading: Array<string>
  deleteTodo: (_id: string) => void
  updateTodoText: (_id: string, text: string) => void
}

export type TodoMapStateToProps = {
  todos: Array<TodoType>
  todosIsLoading: Array<string>
}

export type TodoMapDispatchToProps = {
  requestTodos?: () => void
  addTodo: (text: string) => void
  deleteTodo: (_id: string) => void
  updateTodoText: (_id: string, text: string) => void
}

export type TodoProps = TodoMapStateToProps & TodoMapDispatchToProps

export interface TodoFormType extends UpdateItemBase {
  text: string
}

export type TodoFormTypeKeys = Extract<keyof TodoFormType, string>