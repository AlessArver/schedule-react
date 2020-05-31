import axios from 'axios'
import { BaseResponseAPI } from '../types/api'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/user/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const userApi = {
  register(name: string, surname: string, email: string, password: string) {
    return instance
      .post<BaseResponseAPI>('register', {
        name,
        surname,
        email,
        password
      })
      .then(res => res.data)
  },
  login(email: string, password: string) {
    return instance
      .post<BaseResponseAPI>('login', {
        email,
        password
      })
      .then(res => res.data)
  },
  logout() {
    return instance
      .delete('logout')
      .then(res => res.data)
  },
  getAuthUser() {
    return instance
      .get('/')
      .then(res => res.data)
  }
}
export default userApi