<template>
  <div>
    <h2>分类</h2>
    <h3>{{$store.state.counter}}</h3>

    <h2>{{$store.getters.powerCounter}}</h2>

  </div>
</template>

<script>
export default {
  name: 'Category'
}
</script>

<style scoped>

</style>
