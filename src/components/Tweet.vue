<script setup>

</script>

<template>
  <div class="flex px-3 py-3 border-b border-gray-100">
    <img src="https://picsum.photos/200" alt=""
         class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
    />
    <div class="ml-3 flex-1 flex flex-col space-y-1">
      <div class="tex-sm space-x-1">
        <span class="font-bold">더퀘스트</span>
        <span class="text-gray-500 text-xs">@thequestbook</span>
        <span>. </span>
        <span class="text-gray-500 text-xs">8월 22일</span>
      </div>
      <!--tweet body                -->
      <div>
        얘들아… 이게뭐지?
        음식 다 사서 왔더니 취소란다
      </div>
      <!--tweet actions                -->
      <div class="flex justify-between">
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
          <span class="ml-1 text-gray-400 text-sm">11</span>
        </div>
        <div class="text-gray-500 hover:text-green-500">
          <i class="fas fa-retweet hover:text-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-gray-400 text-sm">2</span>
        </div>
        <div class="text-gray-500 hover:text-red-500">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-gray-400 text-sm">130</span>
        </div>
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
          <span class="ml-1 text-gray-400 text-sm"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>