import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types'


Vue.use(Vuex)

// 对象的解构
// obj = {name: 'aaa', age: 18, height: 1.88, address: 'Shanghai'}
// const {name, age, height} = obj
// console.log(name, age, height)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        console.log('moduleA', context)
        context.commit('updateName', 'wangwu')
      }, 1000);
    }
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111111111111'
    },
    fullName2(state, getters) {
      return getters.fullName + '22222222'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  modules: {}
}

const store = new Vuex.Store({
  state: {
    counter: 3000,
    students: [
      {id: 110, name: 'aaa', age: 20},
      {id: 111, name: 'bbb', age: 22},
      {id: 112, name: 'ccc', age: 30},
      {id: 113, name: 'ddd', age: 10}
    ],
    info: {
      name: 'ninejy',
      age: 28
    }
  },
  actions: {
    // 异步操作都在actions里面完成
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('11111')
        }, 1000);
      })
    }
  },
  mutations: {
    // 同步操作在mutations里完成
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // incrementCount(state, count) {
    //   state.counter += count
    // },
    incrementCount(state, payload) {
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // 1.提前在store中初始化好所需的属性
      // 2.当给state中的对象添加新属性时,使用下面的方式
      // 方式一: 使用 Vue.set(obj, 'newProp', 123)
      // 方式二: 用新对象给旧对象重新复制

      // this.$store.state.info.age = 18  // 响应式

      // this.$store.state.info.address = 'shanghai'  // 这种做不到响应式

      Vue.set(state.info, 'address', 'shanghai')  // 响应式

      // delete state.info.age  // 这种也不是响应式
      // Vue.delete(state.info, 'age')  // 响应式
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    gt20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    gt20stuLength(state, getters) {
      return getters.gt20stu.length
    },
    gtAgeStu(state) {
      return (age) => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

export default store
