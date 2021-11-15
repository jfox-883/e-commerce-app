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

export async function getAddressByIdApi(auth, idAddress) {
    try {
        const url = `${API_URL}/addresses/${idAddress}`
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

export async function addAdressApi(auth, address) {
    try {
        const url = `${API_URL}/addresses`
        const params = {
            method: 'POST',
            headers: {
                'COntent-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`
            },
            body: JSON.stringify({ user: auth.idUser, ...address })
        }
        const res = await fetch(url, params)
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function deleteAddressApi(auth, idAddress) {
    try {
        const url = `${API_URL}/addresses/${idAddress}`
        const params = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`
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

export async function updateAddressApi(auth, address) {
    try {
        const url = `${API_URL}/addresses/${address._id}`
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`
            },
            body: JSON.stringify(address)
        }
        const res = await fetch(url, params)
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}