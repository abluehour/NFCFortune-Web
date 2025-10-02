import { ref } from 'vue'

export function useFortune() {
  const fortune = ref('')
  const isLoading = ref(false)
  const error = ref(false) // 에러 메시지를 저장하도록 수정

  // fetchFortune 함수가 '운세 주제(topic)'를 인자로 받도록 수정합니다.
  const fetchFortune = async () => {
    isLoading.value = true
    error.value = false // 초기화
    fortune.value = ''

    try {
      // 1. 백엔드 서버의 API 주소
      const API_URL = 'https://nfcfortune-server.onrender.com/api/fortune'

      // 2. fetch를 사용해 백엔드에 POST 요청을 보냅니다.
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      // 3. 응답이 성공적이지 않으면 에러를 발생시킵니다.
      if (!response.ok) {
        throw new Error('서버에서 응답을 받지 못했습니다.')
      }

      // 4. 응답받은 JSON 데이터를 파싱합니다.
      const data = await response.json()

      // 5. 백엔드가 보내준 운세 결과를 fortune 상태에 저장합니다.
      fortune.value = data.fortune
      
    } catch (err: any) {
      console.error('Error fetching fortune:', err)
      error.value = true;
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