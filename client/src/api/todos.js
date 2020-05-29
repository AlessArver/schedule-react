import axios from 'axios'

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
            .get('/')
            .then(res => res.data)
    },
    getTodo(id) {
        return instance
            .get(`:${id}`)
            .then(res => res.data)
    },
    createTodo(text) {
        return instance
            .post('create', {text})
            .then(res => res.data)
    },
    updateTodoText(id, text) {
        return instance
            .put(`update-text/${id}`, {text})
            .then(res => res.data)
    },
    completedTodo(id, isCompleted) {
        return instance
            .put(`isCompleted/${id}`, {isCompleted})
            .then(res => res.data)
    },
    deleteTodo(id) {
        return instance
            .delete(`delete/${id}`)
            .then(res => res.data)
    }
}
export default todosApi