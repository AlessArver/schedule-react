import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/schedules/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

const schedulesApi = {
    getSchedlues() {
        return instance
            .get('/')
            .then(res => res.data)
    },
    getSchedule(id) {
        return instance
            .get(`:${id}`)
            .then(res => res.data)
    },
    createSchedule(text, date) {
        return instance
            .post('create', {text, date})
            .then(res => res.data)
    },
    updateScheduleText(id, text) {
        return instance
            .put(`update-text/${id}`, {text})
            .then(res => res.data)
    },
    updateScheduleDate(id, date) {
        return instance
            .put(`update-date/${id}`, {date})
            .then(res => res.data)
    },
    deleteSchedule(id) {
        return instance
            .delete(`delete/${id}`)
            .then(res => res.data)
    }
}
export default schedulesApi