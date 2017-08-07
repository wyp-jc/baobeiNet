<template>
  <div id="app">
 
    <router-view></router-view>
  </div>
</template>

<script>
    import '@/static/font/iconfont.css'
    export default {
        name: 'app'
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /* margin-top: 60px; */
    }
</style>