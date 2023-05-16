import axios from '../utils/axios'
import mock from '../mock-data/mock.json'

const apiUrl = `${import.meta.env.VITE_API_URL}`

export async function getAllStatements() {
  // return axios.get(`${apiUrl}`)
  return mock
}
export async function getStatement(id) {
  // return axios.get(`${apiUrl}/${id}`)
  return mock[id]
}
export async function addStatement(data) {
  return axios.post(`${apiUrl}/`, data)
}
export async function updateStatement(id, data) {
  return axios.put(`${apiUrl}/${id}`, data)
}
export async function deleteStatement(id) {
  return axios.delete(`${apiUrl}/${id}`)
}
