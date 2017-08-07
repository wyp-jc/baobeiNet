import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'HomePage',
            // redirect: "HomePage",
            component: HomePage
        },
        {
            path: '/HomePage',
            name: 'HomePage',

            component: HomePage
        }
    ]
})