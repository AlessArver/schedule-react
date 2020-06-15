import axios from 'axios'
import * as api from '../types/api'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/user/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  register(name: string, surname: string, email: string, password: string) {
    return instance
      .post<api.BaseResponseAPI>('register', {
        name, surname, email, password
      })
      .then(res => res.data)
  },
  login(email: string, password: string) {
    return instance
      .post<api.BaseResponseAPI>('login', {
        email, password
      })
      .then(res => res.data)
  },
  logout() {
    return instance
      .get('logout')
      .then(res => res.data)
  },
  deleteUser(id: string) {
    return instance
      .delete<api.BaseResponseAPI>('delete/:'+ id)
      .then(res => res.data)
  },
  getAuthUser() {
    return instance
      .get<api.UserGetAPI>('/')
      .then(res => res.data)
  }
}