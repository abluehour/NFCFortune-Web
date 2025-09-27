<script setup lang="ts">
import { ref } from 'vue'
import Footer from './components/Footer.vue'
import FortuneCard from './components/FortuneCard.vue'
import Bottom from './components/Bottom.vue'
import Header from './components/Header.vue'


</script>

<template>
  <!-- 배경색 추가 -->
  <div class="min-h-screen bg-gray-50">
    <!-- 전체 화면을 차지하는 컨테이너 -->
    <div class="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <Header/>
      <!-- 중앙 카드 (웹앱 형식) -->
      <FortuneCard />
      <!-- 하단 -->
      <Bottom/>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>

</style>