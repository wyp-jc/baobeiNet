import Vue from 'vue'
import Router from 'vue-router'
//引入主页面
import homePage from '@/views/HomePage'
import goodsPage from '@/views/NewGoods'
import searchPage from '@/views/SearchPage'
import shopPage from '@/views/ShoppingCart'
import zoomPage from '@/views/Zoom'
import groupPage from '@/views/GroupBooking'
<<<<<<< HEAD
import hotDatailPage from '@/views/SearchPage/component/hotDetail'
=======
import Login from '@/views/Login'
import Register from '@/views/Login/register'
>>>>>>> 2136ecd52f26c2258e88a981e947719fb0e1b19e

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
<<<<<<< HEAD
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
=======
            path: '/searchPage',
            name: 'searchPage',
            component: searchPage
<<<<<<< HEAD
        },
        {
            path: "/hotDeatilPage",
            name: "hotDatail",
            component: hotDatailPage
=======
>>>>>>> e67e743e0d2c041ef23f24bbd00a184339e05fe3
>>>>>>> 2136ecd52f26c2258e88a981e947719fb0e1b19e
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