import axios from 'axios'
import { BaseResponseAPI, GetIdAPI, ScheduleGetAPI, SchedulesGetAPI } from '../types/api'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/schedules/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const schedulesApi = {
  getSchedlues() {
    return instance
      .get<SchedulesGetAPI>('/')
      .then(res => res.data)
  },
  getSchedule(id: string) {
    return instance
      .get<ScheduleGetAPI>(`:${id}`)
      .then(res => res.data)
  },
  createSchedule(text: string, date: any) {
    return instance
      .post<GetIdAPI>('create', {text, date})
      .then(res => res.data)
  },
  updateScheduleText(id: string, text: string) {
    return instance
      .put<BaseResponseAPI>(`update-text/${id}`, {text})
      .then(res => res.data)
  },
  updateScheduleDate(id: string, date: any) {
    return instance
      .put<BaseResponseAPI>(`update-date/${id}`, {date})
      .then(res => res.data)
  },
  deleteSchedule(id: string) {
    return instance
      .delete<BaseResponseAPI>(`delete/${id}`)
      .then(res => res.data)
  }
}
export default schedulesApi