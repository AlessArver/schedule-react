import axios from 'axios'
import * as api from '../types/api'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/schedules/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getSchedlues() {
    return instance
      .get<api.SchedulesGetAPI>('/')
      .then(res => res.data)
  },
  getSchedule(id: string) {
    return instance
      .get<api.ScheduleGetAPI>(`:${id}`)
      .then(res => res.data)
  },
  createSchedule(text: string, date: Date) {
    return instance
      .post<api.GetIdAPI>('create', {text, date})
      .then(res => res.data)
  },
  updateScheduleText(id: string, text: string) {
    return instance
      .put<api.BaseResponseAPI>(`update-text/${id}`, {text})
      .then(res => res.data)
  },
  updateScheduleDate(id: string, date: Date) {
    return instance
      .put<api.BaseResponseAPI>(`update-date/${id}`, {date})
      .then(res => res.data)
  },
  deleteSchedule(id: string) {
    return instance
      .delete<api.BaseResponseAPI>(`delete/${id}`)
      .then(res => res.data)
  }
}