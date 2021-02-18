import { request } from './generic.service'

const registerUser = (body) =>
  request({ url: '/register', method: 'post', body })
const loginUser = (body) => request({ url: '/login', method: 'post', body })
const authUser = () => request({ url: '/auth', method: 'get' })
const updateUser = (body) => request({ url: '/user', method: 'put', body })

export { registerUser, loginUser, authUser, updateUser }
