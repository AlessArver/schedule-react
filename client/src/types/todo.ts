import { TodoType, UpdateItemBase } from './index'

export type ownProps = {
  todo: TodoType
  todosIsLoading: Array<string>
  deleteTodo: (_id: string) => void
  updateTodoText: (_id: string, text: string) => void
}

export type mapStateToProps = {
  todos: Array<TodoType>
  todosIsLoading: Array<string>
}

export type mapDispatchToProps = {
  requestTodos?: () => void
  addTodo: (text: string) => void
  deleteTodo: (_id: string) => void
  updateTodoText: (_id: string, text: string) => void
}

export type storeProps = mapStateToProps & mapDispatchToProps

export interface form extends UpdateItemBase {
  text: string
}

export type formKeys = Extract<keyof form, string>