<script setup lang="ts">
defineProps<{ fortune: { header: string; body: string }; loading: boolean; error: boolean; SlowResponse: boolean }>()


</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-md min-h-[200px] flex flex-col items-center justify-center text-center border border-gray-200">   
    
    <div v-if="loading" class="flex flex-col items-center justify-center">
      <v-icon name="la-star-and-crescent-solid" scale="2" animation="spin" class="text-green-500"/>
      <p class="text-gray-500 mt-4 text-base">운세를 읽고 있습니다...</p>
      <p v-if="SlowResponse" class="text-gray-500 mt-2 text-sm">서버가 일어나는 중입니다 잠시만 기다려 주세요...</p>
    </div>

    <div v-else-if="error" class="flex flex-col items-center justify-center">
      <v-icon name="bi-exclamation-circle" scale="2" class="text-green-600 mb-3"/>
      <p class="text-green-600 mb-5">운세를 불러오는 중 오류가 발생했습니다. <br/>새로고침 해주세요.</p>
    </div>
    
    <div v-else-if="fortune && fortune.header" class="flex flex-col items-center justify-center">
      <p class="mb-4 text-gray-600 font-semibold text-base">{{ fortune.header }}</p>
      <span class="text-gray-500 text-base">{{ fortune.body }}</span>
    </div>
    
    <div v-else class="flex flex-col items-center justify-center">
      <v-icon name="gi-crystal-ball" scale="4" class="text-green-500 animate-slow-flash mb-7"/>
      <p>신비로운 수정구가 당신의 선택을 기다립니다</p>
    </div>
  
  </div>
</template>

<style scoped>
@keyframes slow-flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-slow-flash {
  animation: slow-flash 3s infinite;
}
</style>