import axios from '../utils/axios'

const apiUrl = `${import.meta.env.VITE_API_URL}`
// export const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   } else delete axios.defaults.headers.common['Authorization']
// }
export async function signIn(user) {
  return axios.post(`${apiUrl}/signIn`, user)
}
export async function signUp(user) {
  return axios.post(`${apiUrl}/signUp`, user)
}
export async function getAllAccounts() {
  return axios.get(`${apiUrl}`)
}
export async function getAccount(id) {
  return axios.get(`${apiUrl}/${id}`)
}
export async function addAccount(data) {
  return axios.post(`${apiUrl}/`, data)
}
export async function updateAccount(id, data) {
  return axios.put(`${apiUrl}/${id}`, data)
}
export async function deleteAccount(id) {
  return axios.delete(`${apiUrl}/${id}`)
}
