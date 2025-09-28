<script lang="ts" setup>
defineProps<{ disabled?: boolean }>()
//disable - isLoading
const emit = defineEmits<{ (e:'pick'): void }>()
</script>

<template>
  <div class="flex-col items-center justify-center flex">
        <button
          @click="emit('pick')"
          :class="[
            'mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300',
            !disabled ? 'active:scale-95 active:bg-green-700' : 'opacity-60 cursor-not-allowed']">
          <v-icon 
            name="bi-stars" 
            scale="1.2"
            :class="{ 'inline mr-2': disabled }"
            :animation="disabled ? 'spin' : null" 
          />
            {{ disabled ? '운세 측정 중...' : '운세 보기' }}
        </button>
        <p class="text-gray-400 text-sm mt-10">
          <v-icon name="fa-star" scale="0.8" class="mr-5"/>
          <v-icon name="fa-star" scale="0.8" class="mr-5"/>
          <v-icon name="fa-star" scale="0.8"/></p>
        <p class="text-gray-500 text-sm mt-7">AI가 오늘의 운세를 측정 해드립니다</p>
        <p class="text-gray-500 text-sm mt-2">운세는 재미로만 봐주세요</p>
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