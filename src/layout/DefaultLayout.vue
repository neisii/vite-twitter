<template>
    <div class="flex h-screen container mx-auto">
        <!--side section-->
        <div
                class="w-20 xl:w-1/4 pt-10 xl:ml-10 flex flex-col justify-between border-r border-color"
        >
            <div class="flex flex-col items-center xl:items-start">
                <!--twitter logo-->
                <i class="fa-brands fa-twitter text-3xl text-primary ml-4 mb-3"></i>
                <!-- sidemenu icons -->
                <div class="flex flex-col items-start space-y-1">
                    <router-link :to="route.path"
                                 class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
                                 v-for="route in routes" :key="route">
                        <div v-if="route.meta.isMenu">
                            <i :class="route.icon"></i>
                            <span class="ml-5 text-lg hidden xl:inline-block">{{ route.title }}</span>
                        </div>
                    </router-link>

                </div>
                <!-- tweet button -->
                <div class="w-full xl:pr-3 flex justify-center">
                    <button
                            class="mt-3 bg-primary text-white xl:w-full w-12 h-12 rounded-full hover:bg-dark focus:outline-none">
                        <span class="hidden xl:block">트윗</span>
                        <i class="fas fa-plus xl:hidden"></i>
                    </button>
                </div>
            </div>
            <!--profile button-->
            <div class="xl:pr-3 mb-3 relative" @click="showProfileDropDown=true">
                <button class="hidden xl:flex mt-3 px-2 py-1 w-ful w-full h-12 rounded-full hover:bg-blue-50 items-center">
                    <!--랜덤 이미지 사이트 -->
                    <img src="https://picsum.photos/100" alt="" class="w-10 h-10 rounded-full"/>
                    <div class="xl:ml-2 hidden xl:block">
                        <div class="text-sm fond-bold">aaaa.com</div>
                        <div class="text-xs text-gray text-left">@aaaa</div>
                    </div>
                    <i class="ml-auto fas fa-fw fa-ellipsis-h text-xs hidden xl:block"></i>
                </button>

                <div class="xl:hidden flex justify-center">
                    <img src="https://picsum.photos/100" alt=""
                         class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
                    />
                </div>
            </div>
        </div>
        <!--main section-->
        <div class="flex-1 flex h-screen">
            <router-view/>
        </div>
        <!--profile dropdown menu-->
        <div class="absolute bottom-20 left-10 shadow rounded-lg w-60 bg-white" v-if="showProfileDropDown" @click="showProfileDropDown=false">
            <button class="hover:bg-gray-50 border-50 border-b border-gray-100 flex p-3 w-full items-center">
                <img
                        src="https://picsum.photos/200" alt=""
                        class="w-10 h-10 rounded-full cursor-pointer mr-2"
                >
                <div class="ml-2">
                    <div class="font-bold text-sm">aaaaaa@aaaaaa.com</div>
                    <div class="text-left text-gray-500">@aaaaaa</div>
                </div>
                <i class="fas fa-check text-primary ml-auto"></i>
            </button>
            <button class="p-3 hover:bg-gray-50 w-full text-left text-sm" @click="onLogout">
                @aaaaa 계정에서 로그아웃
            </button>
        </div>
    </div>
</template>

<script>
import {onBeforeMount, ref} from 'vue'
import router from '../router'
import {auth} from '../firebase'
import store from '../store'

export default {
    setup() {
        const routes = ref([])
        const showProfileDropDown = ref(false)

        const onLogout = async () => {
            await auth.signOut()
            store.commit("SET_USER", null)
            await router.replace("/login")
        }
        onBeforeMount(() => {
            routes.value = router.options.routes
        })
        return {routes, showProfileDropDown, onLogout}
    },
}
</script>