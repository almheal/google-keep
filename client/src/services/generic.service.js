import axios from '@/plugins/axios'

export const request = async ({ url, method, body = {} }) => {
  const response = await axios[method](url, body)
  return response
}
