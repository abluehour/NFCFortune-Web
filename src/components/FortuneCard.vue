<script setup lang="ts">
defineProps<{ fortune: string }>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg/20 p-6 w-full max-w-md min-h-50 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold text-center mb-4" v-if="!fortune">
      🔮
    </h1>
    <p class="text-gray-600 text-center min-h-[48px] flex items-center justify-center">
      <template v-if="!fortune">
        신비로운 수정구가 당신의 선택을 기다립니다
      </template>
      <template v-else>
        <span class="text-green-600 font-semibold text-lg">{{ fortune }}</span>
      </template>
    </p>
  </div>
</template>