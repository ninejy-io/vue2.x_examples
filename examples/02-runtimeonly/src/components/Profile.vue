<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  beforeRouteEnter(to, from, next) {
    console.log('profile beforeRouteEnter')
    next()
  },
  created() {
    console.log('Profile created')
  },
  destroyed() {
    console.log('Profile destroyed')
  }
}
</script>

<style scoped>
  
</style>
