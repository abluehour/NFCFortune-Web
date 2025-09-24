<script setup lang="ts">
import { ref } from 'vue'



</script>

<template>
  <!-- 배경색 추가 -->
  <div class="min-h-screen bg-gray-100">
    <!-- 전체 화면을 차지하는 컨테이너 -->
    <div class="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <div class="text-center mb-12">
        <h1 class="text-6xl mb-4 text-emerald-600 flex items-center justify-center gap-4">
          <v-icon name="bi-stars" animation="float" scale="3" class="text-amber-400"/> 
          <span>오늘의 운세</span>
          <v-icon name="bi-stars" animation="float" scale="3" class="text-amber-400"/> 
        </h1>
        <p class="text-gray-600 text-xl">당신의 하루를 밝혀줄 신비로운 메시지를 받아보세요</p>
      </div>
      <!-- 중앙 카드 (웹앱 형식) -->
      <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 class="text-2xl font-bold text-center mb-4">오늘의 운세</h1>
        <p class="text-gray-600 text-center">내용이 들어갈 자리입니다</p>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>