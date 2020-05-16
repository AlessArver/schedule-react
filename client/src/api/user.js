import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3001/api/user",
    headers: {
        // "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
    }
})

const userApi = {
    register(name, surname, email, password) {
        return instance.post(`/register`, {
            name,
            surname,
            email,
            password
        })
    },
    login(email, password) {
        return instance.post(`/login`, {
            email,
            password
        })
    }
}
export default userApi