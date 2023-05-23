import axios, { AxiosResponse } from 'axios'

const apiUrl: string = import.meta.env.VITE_API_URL as string

export async function getAllAccounts(): Promise<AxiosResponse> {
  return axios.get(apiUrl)
}

export async function getAccount(id: string): Promise<AxiosResponse> {
  return axios.get(`${apiUrl}/${id}`)
}

export async function addAccount(data: object): Promise<AxiosResponse> {
  return axios.post(apiUrl, data)
}

export async function updateAccount(
  id: string,
  data: object
): Promise<AxiosResponse> {
  return axios.put(`${apiUrl}/${id}`, data)
}

export async function deleteAccount(id: string): Promise<AxiosResponse> {
  return axios.delete(`${apiUrl}/${id}`)
}
