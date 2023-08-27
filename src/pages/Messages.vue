<template>
  <div class="flex-1 flex">
    <!--chat list  -->
    <div class="w-2/5 border-r border-color overflow-y-auto">
      <div class="flex flex-col ">
        <div class="p-3 font-bold text-lg border-b border-color h-14">
          쪽지
        </div>
        <div
            class="flex p-2 hover:bg-gray-50 border-r-4 border-primary border-b-2 border-b-gray-100 "
        >
          <img
              src="https://picsum.photos/200" alt=""
              class="w-10 h-10 rounded-full cursor-pointer mr-2"
          />
          <div class="flex space-x-1">
            <div class="font-bold">아사아사</div>
            <div class="text-gray">@asaasa</div>
            <div class="text-gray">1월 29일</div>
          </div>
          <div class="text-gray">메시지</div>
        </div>
      </div>
      <!-- a chat list-->
      <div class="flex px-3 h-14 items-center border-b border-color"
           v-for="message in 10" :key="message"
      >
        <img src="https://picsum.photos/100" alt=""
             class="w-8 h-8 rounded-full cursor-pointer mr-2 cursor-pointer"
        />
        <div>
          <div class="flex space-x-1">
            <div class="font-bold">아사아사</div>
            <div class="text-gray">@asaasa</div>
            <div class="text-gray">1월 29일</div>
          </div>
          <div class="text-gray">메시지</div>
        </div>
      </div>
    </div><!--뭔가 이상한데???-->
    <!-- chatting   -->
    <div class="w-3/5 border-r border-color">
      <div class="flex flex-col h-screen">
        <!-- title -->
        <div class="flex px-3 h-14 items-center border-b border-color">
          <img src="https://picsum.photos/100" alt=""
               class="w-8 h-8 rounded-full cursor-pointer mr-2 cursor-pointer"
          />
          <div>
            <div class="font-bold text-lg">아싸</div>
            <div class="text-sm text-gray">@assa</div>
          </div>
        </div>
        <!-- user info -->
        <div class="flex flex-col justify-center items-center border-b border-color hover:bg-gray-50 py-6"
        >
          <div>
            <span class="font-bold mr-1">아싸</span>
            <span class="text-gray">@assa</span>
          </div>
          <div>
            <span class="font-bold  mr-1">28</span>
            <span class="text-gray">팔로우 중</span>
            <span class="font-bold mk-3  mr-1">7</span>
            <span class="text-gray">팔로워</span>
          </div>
          <div>
            <span class="text-gray mr-1">가입일</span>
            <span class="text-gray">2021년 10월</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-scroll">
          <!-- chat bubble : my-->
          <div class="text-right px-3 py-3">
          <span class="bg-primary text-white px-4 py-2 text-lg">
            메시지
          </span>
            <div class="mt-2 text-xs text-gray">2021월 1월 29일 오전 1:05</div>
          </div>
          <!-- chat bubble : oppenent-->
          <div class="text-left px-3 py-3" v-for="chat in 25" :key="chat">
          <span class="bg-gray-100 px-4 py-2 text-lg">
            메시지
          </span>
            <div class="mt-2 text-xs text-gray">2021월 1월 29일 오전 1:06</div>
          </div>
        </div>
        <!--chat input-->
        <div class="flex items-center bg-white border-t border-color sticky">
          <input type="text"
                 class="m-2 py-1 px-4 rounded-full bg-gray-100 resize-none outline-none flex-1"
                 placeholder="새 쪽지 작성하기"
          >
          <button class="text-center">
            <i class="far fa-paper-plane text-primary text-lg hover:bg-blue-50 p-2 rounded-full w-10 h-10"></i>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>