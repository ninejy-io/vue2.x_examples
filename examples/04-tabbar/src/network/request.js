import axios from 'axios'

// 封装网络请求
export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://47.52.119.132:8088',
    // headers: {},
    timeout: 10000
  })

  // 2.拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    // 1.config中的一些信息不符合服务器的要求,可以在这里修改
    // 2.每次发送网络请求时,都希望在界面中显示一个请求图标
    // 3.某些网路请求(比如登录(token)),必须携带一些特殊的信息
    return config
  }, err => {
    // console.log(err)
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  // 3.发送网络请求
  return instance(config)
}


// export function request2(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://47.52.119.132:8088',
//       timeout: 10000
//     })
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }
