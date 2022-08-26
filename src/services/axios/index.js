import axios from 'axios'
import store from 'store'
import { notification } from 'antd'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
})

apiClient.interceptors.request.use(request => {
  const accessToken = store.get('accessToken')
  console.log("🚀 ~ file: index.js ~ line 13 ~ accessToken", accessToken)
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`
    // request.headers.AccessToken = accessToken
  }
  return request
})

// apiClient.interceptors.response.use(undefined, error => {
  // Errors handling
  // const { response } = error
  // const { data } = response
  // if (data) {
  //   notification.warning({
  //     message: data,
  //   })
  // }
// })

export default apiClient
