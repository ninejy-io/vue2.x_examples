<template>
  <div>
    <h2>首页</h2>

    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    <br>

    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <br>

    <h3>{{$store.state.counter}}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <h2>-------------------首页内容---------------------</h2>
    <h2>{{$store.state.counter * $store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>

    <br>
    <button @click="addStu">添加学生</button>
    <br>

    <h2>大于20岁的学生: {{$store.getters.gt20stu}} 共有 {{$store.getters.gt20stuLength}} 个.</h2>

    <h3>大于自定义年龄的学生: {{$store.getters.gtAgeStu(22)}}</h3>

  </div>
</template>

<script>

import { INCREMENT } from '../../store/mutations-types'

export default {
  name: 'Home',
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 普通提交风格
      // this.$store.commit('incrementCount', count)

      // payload 提交
      this.$store.commit({
        type: 'incrementCount',
        count: count
      })
    },
    addStu() {
      const stu = {id: 114, name: 'eee', age: 35}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo')  // 同步操作

      this.$store.dispatch('aUpdateInfo', '这是携带的数据')  // 异步操作
        .then(res => {
          console.log(res)
        })
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  },
}
</script>

<style scoped>

</style>
