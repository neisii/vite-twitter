import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
 import store from '../store'


const routes = [
    { path: '/', component: Home, title:'홈', icon: 'fas fa-fw fa-home text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true} },
    { path: '/', component: Home, title:'탐색하기', icon: 'fas fa-fw fa-hashtag text-2xl' , meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true} },
    { path: '/notifications', component: Notifications, title:'알림', icon: 'far fa-fw fa-bell text-2xl' , meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true} },
    { path: '/messages', component: Messages, title:'쪽지', icon: 'far fa-fw fa-envelope text-2xl' , meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true} },
    { path: '/', component: Messages, title:'북마크', icon: 'far fa-fw fa-bookmark text-2xl' , meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true} },
    { path: '/', component: Messages, title:'리스트', icon: 'far fa-fw fa-list-alt text-2xl' , meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true} },
    { path: '/profile', component: Profile, title:'프로필', icon: 'far fa-fw fa-user text-2xl' , meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true} },
    { path: '/', component: Messages, title:'더보기', icon: 'fas fa-fw fa-ellipsis-h text-2xl' , meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true} },
    { path: '/register', component: Register, title:'회원가입', meta: { isMenu: false, layout: 'EmptyLayout'} },
    { path: '/login', component: Login, title:'로그인', meta: { isMenu: false, layout: 'EmptyLayout'} },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// navigation guard
router.beforeEach((to, from, next) => {
    console.log(to)
    const currentUser = store.state.user
    const requireAuth = to.matched.some((record) => record.meta.requireAuth)
    // not authenticated
    if (requireAuth && !currentUser) next('/login') // 로그인 페이지로 이동
    // authenticated (Vuex)
    else next() // 요청 계속
    // router.push('/login')
})

export default router