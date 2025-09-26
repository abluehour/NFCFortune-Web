<script setup lang="ts">
import { ref } from 'vue'



</script>

<template>
  <!-- 배경색 추가 -->
  <div class="min-h-screen bg-gray-100">
    <!-- 전체 화면을 차지하는 컨테이너 -->
    <div class="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <div class="text-center mb-12">
        <h1 class="text-6xl mb-4 text-green-500 flex items-center justify-center gap-4">
          <v-icon name="bi-stars" animation="float" scale="3"/> 
          <span>오늘의 운세</span>
          <v-icon name="bi-stars" animation="float" scale="3"/> 
        </h1>
        <p class="text-gray-600 text-xl">당신의 하루를 밝혀줄 신비로운 메시지를 받아보세요</p>
      </div>
      <!-- 중앙 카드 (웹앱 형식) -->
      <div class="bg-white rounded-xl shadow-lg/20 p-6 w-full max-w-md min-h-50 flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-center mb-4">
          <v-icon name="gi-crystal-ball" scale="4" class="text-purple-500 animate-slow-flash"/>
        </h1>
        <p class="text-gray-600 text-center">신비로운 수정구가 당신의 선택을 기다립니다</p>
      </div>

      <!-- 하단 -->
      <div class="flex-col items-center justify-center flex">
        <button
          class="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
        >
          운세 보기
        </button>
        <p class="text-gray-500 text-sm mt-10"><v-icon name="bi-stars" scale="1" class="mr-5"/><v-icon name="bi-stars" scale="1" class="mr-5"/><v-icon name="bi-stars" scale="1"/></p>
        <p class="text-gray-500 text-sm mt-7">AI가 오늘의 운세를 측정 해드립니다</p>
        <p class="text-gray-500 text-sm mt-2">운세는 재미로만 봐주세요</p>
      </div>
      <div>
        <footer class="fixed bottom-0 left-0 w-full bg-white text-center py-2 shadow-md">
            <p class="text-gray-500 text-sm mt-10">ⓒ 2025 NFC Fortune Project by abluehour</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slow-flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.animate-slow-flash {
  animation: slow-flash 2s infinite;
}
</style>