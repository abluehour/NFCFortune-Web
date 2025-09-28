<script setup lang="ts">
import Footer from './components/Footer.vue'
import Bottom from './components/Bottom.vue'
import Header from './components/Header.vue'
import FortuneCard from './components/FortuneCard.vue'
import { useFortune } from './composables/useFortune'


const { fortune, isLoading, fetchFortune, error } = useFortune()

</script>

<template>
  <!-- 배경색 추가 -->
  <div class="min-h-screen bg-gray-50">
    <!-- 전체 화면을 차지하는 컨테이너 -->
    <div class="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <Header/>
      <!-- 중앙 카드 (웹앱 형식) -->
      <FortuneCard :fortune="fortune" :loading="isLoading" :error="error"/>
      <!-- 하단 -->
      <Bottom :disabled="isLoading" @pick="fetchFortune"/>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>

</style>