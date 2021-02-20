// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // 1.普通用法 createElement('标签', {标签的属性}, ['内容'])
    // return createElement('h2',
    //   {class: 'box'},
    //   ['Hello World'])

    // 2.传入组件对象
    console.log(App)
    // 那么 .vue 文件中的 template 是由谁处理的呢?
    // 是由 vue-template-compiler
    return createElement(App)
  }
})

// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI

// runtime-only(v2) (1.性能更好, 2.下面的代码量更少)
// render -> vdom -> UI
