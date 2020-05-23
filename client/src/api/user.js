import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3001/api/user/",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

const userApi = {
    register(name, surname, email, password) {
        return instance
            .post("register", {
                name,
                surname,
                email,
                password
            })
            .then(res => res.data)
    },
    login(email, password) {
        return instance
            .post("login", {
                email,
                password
            })
            .then(res => res.data)
    }
}
export default userApi