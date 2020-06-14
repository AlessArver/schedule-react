import { RootState } from '../flux'

export const getTodos = (state: RootState) =>  state.todosPage.todos

export const getCompletedInProgress = (state: RootState) => state.todosPage.completedInProgress