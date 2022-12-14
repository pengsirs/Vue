import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: "/login"
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/home',
        redirect: "/home/index"
    },
    {
        path: '/home',
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
            path: "/home/CommentList",
            component: () =>
                import ("../components/Comment/CommentList.vue")
        }, {
            path: "/home/AlbumList",
            component: () =>
                import ("../components/Album/AlbumList.vue")
        }, {
            path: "/home/Setting",
            component: () =>
                import ("../views/SettingView.vue")
        }],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router