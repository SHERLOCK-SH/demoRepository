<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <h1>主页</h1>
    <router-link to="/home" tag="li" replace>首页</router-link>
    <router-link to="/about" tag="li" replace>关于</router-link>
    <router-link to="/user/123" tag="button" replace>用户</router-link>
    <router-view></router-view>
    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      this.$router.push('/home')
      console.log('homeClick');
    },
    aboutClick() {
      this.$router.push('/about')
      console.log('aboutClick');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .router-link-active {
    color: #f00;
  }
</style>
