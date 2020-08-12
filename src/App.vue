<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  // import Vue from 'vue';
  // import VueResource from 'vue-resource'
  // Vue.use(VueResource)
  // 如果我们通过全局配置了，请求的数据接口 根域名，则 ，在每次单独发起 http 请求的时候，请求的 url 路径，应该以相对路径开头，前面不能带 /  ，否则 不会启用根路径做拼接；
  // Vue.http.options.root = '';
  // 全局启用 emulateJSON 选项
  //Vue.http.options.emulateJSON = true;
  export default {
    name: '',
    //存放 数据
    data: function () {
      return {
      }
    },
    mounted() { 
      alert()
    },
    //存放 方法
    methods: {

    },
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
