import axios from 'axios'
import { BaseResponseAPI, GetIdAPI, TodoGetAPI, TodosGetAPI } from '../types/api'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/todos/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const todosApi = {
  getTodos() {
    return instance
      .get<TodosGetAPI>('/')
      .then(res => res.data)
  },
  getTodo(_id: string) {
    return instance
      .get<TodoGetAPI>(`:${_id}`)
      .then(res => res.data)
  },
  createTodo(text: string) {
    return instance
      .post<GetIdAPI>('create', {text})
      .then(res => res.data)
  },
  updateTodoText(_id: string, text: string) {
    return instance
      .put<BaseResponseAPI>(`update-text/${_id}`, {text})
      .then(res => res.data)
  },
  completedTodo(_id: string, isCompleted: boolean) {
    return instance
      .put<BaseResponseAPI>(`isCompleted/${_id}`, {isCompleted})
      .then(res => res.data)
  },
  deleteTodo(_id: string) {
    return instance
      .delete<BaseResponseAPI>(`delete/${_id}`)
      .then(res => res.data)
  }
}
export default todosApi