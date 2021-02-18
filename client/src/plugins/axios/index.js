import axios from 'axios'
import interceptors from './interceptors'

const BASE_URL = 'http://localhost:5000/api'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

interceptors(instance)

export default instance
