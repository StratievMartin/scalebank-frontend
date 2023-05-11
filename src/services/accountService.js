import axios from '../utils/axios'

const apiUrl = `${import.meta.env.VITE_API_URL}`

export function getAllAccounts() {
  return axios.get(`${apiUrl}`)
}
export function getAccount(id) {
  return axios.get(`${apiUrl}/${id}`)
}
export function addAccount(data) {
  return axios.post(`${apiUrl}/`, data)
}
export function updateAccount(id, data) {
  return axios.put(`${apiUrl}/${id}`, data)
}
export function deleteAccount(id) {
  return axios.delete(`${apiUrl}/${id}`)
}
