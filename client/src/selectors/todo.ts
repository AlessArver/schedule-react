import { RootState } from '../flux'

export const getTodos = (state: RootState) =>  state.todosPage.todos

export const getCompletedInProgress = (state: RootState) => state.todosPage.completedInProgress

export const getTodosIsLoading = (state: RootState) => state.todosPage.todosIsLoading