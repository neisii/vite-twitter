<template>
  <!-- notification -->
  <div class="flex-1 border-r border-color flex flex-col overflow-y-auto">
    <!-- title -->
    <div class="p-3 font-bold text-lg border-b border-color">알림</div>
    <!-- notifications -->
    <div class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-color cursor-pointer"
         v-for="notification in 15" :key="notification"
    >
      <div class="flex justify-between">
        <img src="https://picsum.photos/200" alt=""
             class="w-10 h-10 rounded-full hover:opacity-80"
        />
        <i class="fas fa-ellipsis-h text-gray hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10 flex items-center justify-center"
        ></i>
      </div>
      <div>
        <span class="font-bold"> sssdss</span> 님의 최근 트윗
      </div>
      <div class="text-gray">
        트윗 답글 내용요요요요용ㅇㅇ
        ghdpdpdddpddpd
      </div>
    </div>
  </div>
  <!-- trends-->
  <Trends/>
</template>

<script>
import Trends from '../components/Trends.vue'

export default {
  components: { Trends },
  setup() {
  }
}
</script>
