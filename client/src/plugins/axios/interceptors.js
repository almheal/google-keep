function setTokenToLocalStorage(response) {
  const url = response.config.url
  if (url === '/login' && response.status === 200) {
    const token = response.data.token
    localStorage.setItem('app_token', token)
  }
  return response
}

function addTokenOnRequest(req) {
  const token = localStorage.getItem('app_token')
  if (token) {
    req.headers['Authorization'] = `Bearer ${token}`
  }
  return req
}

export default function(axios) {
  axios.interceptors.response.use(setTokenToLocalStorage)
  axios.interceptors.request.use(addTokenOnRequest)
}
