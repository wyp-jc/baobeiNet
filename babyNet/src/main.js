// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'

import Vuex from 'vuex'; //引入vuex
import store from './store/index.js'
import axios from 'axios'

import index from '@/mock/index.js' //引入mock拦截器数据


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Router)

Vue.prototype.$axios = axios;

//配置axios接口
// var axios = axios.create({
//     //这个baseURL为固定写法
//     baseURL: "", //打包上线的时候替换baseURL
//     // timeout: 1000,
//     headers: { 'X-Custom-Header': 'foobar' }
// })

// Vue.config.silent = true

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})