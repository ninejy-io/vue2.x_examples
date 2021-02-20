<template>
  <div>
    <h2>个人中心</h2>
    <h3>用户名: {{userId}}</h3>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  created() {
    console.log('User created')
  },
  destroyed() {
    console.log('User destroyed')
  }
}
</script>

<style scoped>

</style>