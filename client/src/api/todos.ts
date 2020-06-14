import axios from 'axios'
import * as api from '../types/api'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/todos/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getTodos(page: any) {
    return instance
      .get<api.TodosGetAPI>(`?currentPage=${page}`)
      .then(res => res.data)
  },
  getTodo(_id: string) {
    return instance
      .get<api.TodoGetAPI>(`:${_id}`)
      .then(res => res.data)
  },
  createTodo(text: string) {
    return instance
      .post<api.GetIdAPI>('create', {text})
      .then(res => res.data)
  },
  updateTodoText(_id: string, text: string) {
    return instance
      .put<api.BaseResponseAPI>(`update-text/${_id}`, {text})
      .then(res => res.data)
  },
  completedTodo(_id: string, isCompleted: boolean) {
    return instance
      .put<api.BaseResponseAPI>(`isCompleted/${_id}`, {isCompleted})
      .then(res => res.data)
  },
  deleteTodo(_id: string) {
    return instance
      .delete<api.BaseResponseAPI>(`delete/${_id}`)
      .then(res => res.data)
  }
}