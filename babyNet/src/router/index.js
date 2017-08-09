import Vue from 'vue'
import Router from 'vue-router'
//引入主页面
import homePage from '@/views/HomePage'
import goodsPage from '@/views/NewGoods'
import searchPage from '@/views/SearchPage'
import shopPage from '@/views/ShoppingCart'
import zoomPage from '@/views/Zoom'
import groupPage from '@/views/GroupBooking'
import Login from '@/views/Login'
import Register from '@/views/Login/register'

Vue.use(Router)

let router = new Router({
    mode: "history",
    routes: [{
            path: '/',
            redirect: { name: "homePage" }
        }, {
            path: '/homePage',
            name: 'homePage',
            component: homePage
        }, {
            path: '/goodsPage',
            name: 'goodsPage',
            component: goodsPage
        },
        {
            path: '/groupPage',
            name: 'groupPage',
            component: groupPage
        },
        {
            path: '/shopPage',
            name: 'shopPage',
            component: shopPage
        },
        {
            path: '/zoomPage',
            name: 'zoomPage',
            component: zoomPage
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
})

router.beforeEach((to, from, next) => {
    // var userinfo = window.sessionStorage.getItem['user']
    // if (!userinfo && to.path!='/login') {
    //     next('login')
    // } else {
    //     next()
    // }
    next()
})

export default router