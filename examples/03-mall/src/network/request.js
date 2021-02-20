import axios from 'axios'

// 封装网络请求
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://47.52.119.132:8088',
    // headers: {},
    timeout: 10000
  })

  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err)
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    // console.log(err)
  })

  return instance(config)
}
