<template>
  <div class="flex h-screen">
    <!--side section-->
    <div class="w-1/4 pt-10 ml-10 flex flex-col justify-between border-r border-gray-200">
      <div class="flex flex-col items-center lg:items-start">
        <!--twitter logo-->
        <i class="fa-brands fa-twitter text-3xl text-primary ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-fw fa-home text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-fw fa-hashtag text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-fw fa-bell text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-fw fa-envelope text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-fw fa-bookmark text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="far fa-fw fa-list-alt text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-fw fa-user text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
          </div>
          <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
            <i class="fas fa-fw fa-ellipsis-h text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">더보기</span>
          </div>
        </div>
        <!-- tweet button -->
        <div class="w-full lg:pr-3 flex justify-center">
          <button class="mt-3 bg-primary text-white lg:w-full w-12 h-12 rounded-full hover:bg-dark focus:outline-none">
            <span class="hidden lg:block">트윗</span>
            <i class="fas fa-plus lg:hidden"></i>
          </button>
        </div>
      </div>
      <!--profile button-->
      <div class="lg:pr-3 mb-3">
        <button class="hidden lg:flex mt-3 px-2 py-1 w-ful w-full h-12 rounded-full hover:bg-blue-50 items-center">

          <img src="https://picsum.photos/100" alt="" class="w-10 h-10 rounded-full"/><!--랜덤 이미지 사이트 -->
          <div class="lg:ml-2 hidden lg:block">
            <div class="text-sm fond-bold">aaaa.com</div>
            <div class="text-xs text-gray-500 text-left">@aaaa</div>
          </div>
          <i class="ml-auto fas fa-fw fa-ellipsis-h text-xs hidden lg:block"></i>

        </button>

        <div class="lg:hidden flex justify-center">
          <img src="https://picsum.photos/100" alt="" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"/>
        </div>
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

</style>