const BASE_URL = "http://localhost:8800"

export const isAuthenticated = () => {

}
export const generateToken = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
export const login = async (username, password) => {
    return await fetch(`${BASE_URL}/users?username=${username}&password=${password}`).then(response => response.json())
}

export const register = async (username, password) => {
    return await fetch(`http://localhost:8800/users`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            username,
            email: "",
            name: "",
            lastname: "",
            password
        })
    }).then(res => res.json())
}

export const getUser = async (email) => {
    return await fetch(`${BASE_URL}/users?email=${email}`).then(res => res.json())
}

export const getCars = async () => {
    return await fetch(`${BASE_URL}/cars`).then(result => result.json())
}

export const editProfile = async (data, id) => {
    return await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}