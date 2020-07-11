<template>
  <div>
    <h2>我是用户</h2>
    <p>我是内容</p>
    <h3>当前用户:{{userId}}</h3>
  </div>
</template>

<script>
    export default {
        name: "User",
      computed: {
          userId() {
            return this.$route.params.id
          }
      }
    }
</script>

<style scoped>

</style>
