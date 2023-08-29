import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'


const routes = [
    { path: '/', component: Home, icon:'fas fa-fw fa-home text-2xl', title:'홈' },
    { path: '/', component: Home, icon:'fas fa-fw fa-hashtag text-2xl', title:'탐색하기' },
    { path: '/notifications', component: Notifications, icon:'far fa-fw fa-bell text-2xl', title:'알림' },
    { path: '/messages', component: Messages, icon: 'far fa-fw fa-envelope text-2xl', title: '쪽지' },
    { path: '/', component: Home, icon:'far fa-fw fa-bookmark text-2xl', title:'북마크' },
    { path: '/', component: Home, icon:'far fa-fw fa-list-alt text-2xl', title:'리스트' },
    { path: '/profile', component: Profile, icon: 'far fa-fw fa-user text-2xl', title: '프로필' },
    { path: '/', component: Profile, icon: 'fas fa-fw fa-ellipsis-h text-2xl', title: '더보기' },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router