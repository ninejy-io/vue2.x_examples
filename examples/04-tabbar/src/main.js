import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


// 全局使用 axios
// axios 全局配置
// axios.defaults.baseURL = 'http://47.52.119.132:8088'
// axios.defaults.timeout = 10000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios 基本使用
// axios({
//   url: 'http://47.52.119.132:8088/get',
//   // method: 'post'
//   // params: {}
// }).then(res => {
//   console.log(res)
// })

// axios.get('http://47.52.119.132:8088/get').then(res => {
//   console.log(res)
// })


// axios 发送并发请求
// axios.all(
//   [
//     axios({
//       url: 'http://47.52.119.132:8088/get'
//     }),
//     axios({
//       url: 'http://47.52.119.132:8088/headers'
//     })
//   ]
// ).then(results => {
//   console.log(results)
// })


// axios.all(
//   [
//     axios({
//       url: '/get'
//     }),
//     axios({
//       url: '/headers'
//     })
//   ]
// ).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))


request({
  url: '/get'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
