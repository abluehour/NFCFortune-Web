import { ref } from 'vue'

export function useFortune() {
  // 앱의 모든 상태(state)를 여기서 관리.
  const fortune = ref('')
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // 운세를 가져오는 함수
  const fetchFortune = async () => {
    isLoading.value = true
    error.value = null
    fortune.value = '' // 초기화

    try {
      // 1초 지연을 추가하여 로딩 상태를 시각적으로 확인
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // 여기에 실제 API 호출 로직을 추가
      // 예시: const response = await fetch('https://api.example.com/fortune')
      // const data = await response.json()
      // fortune.value = data.fortune

      // 임시로 고정된 운세 메시지 사용
      const fortunes = [
        '오늘은 좋은 일이 생길 거예요!',
        '조금 더 노력하면 큰 성과가 있을 거예요.',
        '새로운 사람을 만나게 될 거예요.',
        '건강에 신경 쓰세요.',
        '재정적으로 좋은 기회가 올 거예요.',
      ]
      fortune.value = fortunes[Math.floor(Math.random() * fortunes.length)]
    } catch (err) {
      error.value = '운세를 가져오는 데 실패했습니다. 다시 시도해주세요.'
    } finally {
      isLoading.value = false
    }
  }

  return {
    fortune,
    isLoading,
    error,
    fetchFortune,
  }
}