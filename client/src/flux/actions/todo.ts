import { TodoType } from '../../types'

export default {
  setTodos: (todos: Array<TodoType>) => ({type: 'TODO/SET_TODOS', todos} as const),
  addTodoSuccess: (_id: string, text: string, createdAt: Date) =>
    ({type: 'TODO/ADD_TODO', _id, text, createdAt} as const),
  deleteTodoSuccess: (_id: string) => ({type: 'TODO/DELETE_TODO', _id} as const),
  updateTodoTextSuccess: (_id: string, text: string) =>
    ({type: 'TODO/UPDATE_TODO_TEXT', _id, text} as const),
  toggleIsCompletedSuccess: (_id: string) =>
    ({type: 'TODO/TOGGLE_IS_COMPLETED_TODO', _id} as const)
}

