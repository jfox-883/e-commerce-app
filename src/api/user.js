import { API_URL } from '../constants/consts'

export async function registerApi(formData) {
    try {
        const url = `${API_URL}/auth/local/register`
        const params = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        }
        const res = await fetch(url, params)
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function loginApi(formData) {
    try {
        const url = `${API_URL}/auth/local`
        const params = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }

        const res = await fetch(url, params)
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getMeApi(token) {
    try {
        const url = `${API_URL}/users/me`
        const params = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const res = await fetch(url, params)
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function updateUserApi(auth, formData) {
    try {
        const url = `${API_URL}/users/${auth.idUser}`
        const params = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${auth.token}`
            },
            body: JSON.stringify(formData)
        }
        const res = await fetch(url, params)
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}