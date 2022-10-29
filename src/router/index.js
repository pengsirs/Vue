import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: "/home"
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [{
            path: "/home/index",
            component: () =>
                import ("../views/LunboView.vue")
        }, {
            path: "/home/UserList",
            component: () =>
                import ("../components/User/UserList.vue")
        }, {
            path: "/home/SingeList",
            component: () =>
                import ("../components/Singe/SingeList.vue")
        }, {
            path: "/home/Setting",
            component: () =>
                import ("../views/SettingView.vue")
        }],
    },
    {
        path: '/home',
        redirect: "/home/index"
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router