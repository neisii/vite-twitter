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
          <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-fw fa-home text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">홈</span>
          </router-link>
          <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-fw fa-hashtag text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">탐색하기</span>
          </router-link>
          <router-link to="/notifications"  class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <i class="far fa-fw fa-bell text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">알림</span>
          </router-link>
          <router-link to="/messages" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <i class="far fa-fw fa-envelope text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">쪽지</span>
          </router-link>
          <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <i class="far fa-fw fa-bookmark text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">북마크</span>
          </router-link>
          <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <i class="far fa-fw fa-list-alt text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">리스트</span>
          </router-link>
          <router-link to="/profile" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <i class="far fa-fw fa-user text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">프로필</span>
          </router-link>
          <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-fw fa-ellipsis-h text-2xl"></i>
            <span class="ml-5 text-lg hidden xl:inline-block">더보기</span>
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
      <div class="xl:pr-3 mb-3">
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
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
}
</script>