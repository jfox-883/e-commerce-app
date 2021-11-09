import { API_URL } from "../constants/consts";

export async function getAddressApi(auth) {
    try {
        const url = `${API_URL}/addresses?user=${auth.idUser}`
        const params = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`,
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