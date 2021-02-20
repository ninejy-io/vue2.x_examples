// 使用CommonJS的模块化规范
const {add, mul} = require('./js/mathUtils.js.js');

console.log(add(10, 20));
console.log(mul(20, 40));

// 使用ES6的模块化规范
import {name, age, height} from './js/info.js.js';

console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require('./css/normal.css');

// 依赖less文件
require('./css/special.less');

document.writeln('<h2>你好啊, 哈哈哈！！！</h2>');

// 使用 Vue 进行开发
import Vue from 'vue'

// import App from './vue/app.js'

import App from './vue/App.vue'

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})