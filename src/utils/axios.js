import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    //  Authorization: `<Your Auth Token>`,
    // timeout: 10000,
  },
})

export default instance
