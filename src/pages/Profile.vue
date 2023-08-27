<template>
  <div class="flex-1 flex">
    <!--profile section  -->
    <div class="flex-1 flex flex-col border-r border-color">
      <!-- title -->
      <div class="p-3 py-1 flex border-b border-color">
        <button class="mr-4">
          <i class="fas fa-arrow-left text-primary p-3 rounded-full hover:bg-blue-50"
          ></i>
        </button>
        <div>
          <div class="font-extrabold text-lg">@sdads</div>
          <div class="text-xs text-gray">333 트윗</div>
        </div>

      </div>
      <!-- background image -->
      <div class="bg-gray-300 h-40 relative flex-none">
        <!-- profile image -->
        <div
            class="border-4 border-white bg-gray-100 w-28 h-28 rounded-full absolute -bottom-14 left-2"
        >
          <img src="https://picsum.photos/200" alt=""
               class="rounded-full opacity-90 hover:opacity-100 cursor-pointer"
          />
        </div>
      </div>
      <!-- profile edit button -->
      <div class="text-right mt-2 mr-2">
        <button class="border text-sm border-primary text-primary px-3 py-1 hover:bg-gray-50 font-bold rounded-full"
        >프로필 수정
        </button>
      </div>
      <!-- user info -->
      <div class="mx-3 mt-2">
        <div class="font-extrabold text-lg">aaaaaa</div>
        <div class="text-gray">@aaaaaa</div>
        <div>
          <span class="text-gray">가입일:</span>
          <span class="text-gray">2021년 11월</span>
        </div>
        <div>
          <span class="font-bold mr-1">28</span>
          <span class="text-gray mr-3">팔로우 중</span>
          <span class="font-bold mr-1">7</span>
          <span class="text-gray">팔로워</span>
        </div>
      </div>
<!-- tabs -->
      <div class="flex border-b border-color mt-3">
        <div class="py-3 text-primary font-bold border-b border-primary text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary"
        >
          트윗
        </div>
        <div class="py-3 text-gray font-bold text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary"
        >
          트윗 및 답글
        </div>
        <div class="py-3 text-gray font-bold  text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary"
        >
          미디어
        </div>
        <div class="py-3 text-gray font-bold  text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary"
        >
          마음에 들어요
        </div>
<!--tweets-->
      </div>
      <div class="overflow-y-auto">
        <Tweet v-for="tweet in 10" :key="tweet" />
      </div>
    </div>
    <!-- trend section-->
    <Trends/>
  </div>
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweet from '../components/Tweet.vue'

export default {
  components: {Trends, Tweet},
  setup() {
  },
}
</script>