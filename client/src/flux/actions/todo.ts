import { TodoType } from '../../types'

export default {
  setTodos: (todos: Array<TodoType>) => ({type: 'SET_TODOS', todos} as const),
  addTodoSuccess: (_id: string, text: string, createdAt: Date) =>
    ({type: 'ADD_TODO', _id, text, createdAt} as const),
  deleteTodoSuccess: (_id: string) => ({type: 'DELETE_TODO', _id} as const),
  updateTodoTextSuccess: (_id: string, text: string) =>
    ({type: 'UPDATE_TODO_TEXT', _id, text} as const),
  toggleIsCompletedSuccess: (_id: string) =>
    ({type: 'TOGGLE_IS_COMPLETED_TODO', _id} as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
  toggleTodoIsLoading: (todoIsLoading: boolean, _id: string) => ({
    type: 'TOGGLE_TODO_IS_LOADING',
    todoIsLoading, _id
  } as const)
}

