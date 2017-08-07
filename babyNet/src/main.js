// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from "./mock/mock"
import axios from "axios"
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)
    //创建baseUrl后台接口  配置axios的请求拦截器
var instance = axios.create({
    baseUrl: "", //打包上线的时候替换baseUrl
    timeout: 1000,
    headers: { 'X-Custom-Header': 'footer' }
});
//将axios注册到vue原型上
Vue.prototype.$axios = instance;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})