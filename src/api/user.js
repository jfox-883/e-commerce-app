import { API_URL } from '@env'

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