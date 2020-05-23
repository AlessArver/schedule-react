import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3001/api/me/",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

const userAuthApi = {
    logout() {
        return instance
            .delete("logout")
            .then(res => res.data)
    },
    getAuthUser() {
        return instance
            .get("/")
            .then(res => res.data)
    }
}
export default userAuthApi