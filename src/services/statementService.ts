import axios, { AxiosResponse } from 'axios'

const apiUrl: string = import.meta.env.VITE_API_URL as string

export async function getAllStatements(): Promise<AxiosResponse> {
  return axios.get(`${apiUrl}/statements`)
}
export async function getStatement(id: string): Promise<AxiosResponse> {
  return axios.get(`${apiUrl}/statements/${id}`)
}
export async function addStatement(data: object): Promise<AxiosResponse> {
  return axios.post(`${apiUrl}/statement`, data)
}
export async function updateStatement(
  id: string,
  data: object
): Promise<AxiosResponse> {
  return axios.put(`${apiUrl}/${id}`, data)
}
export async function deleteStatement(id: string): Promise<AxiosResponse> {
  return axios.delete(`${apiUrl}/${id}`)
}
