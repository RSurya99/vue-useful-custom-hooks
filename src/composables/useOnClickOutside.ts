import { onMounted, onUnmounted } from 'vue'

export const useOnClickOutside = (ref: any = null, callback: () => void) => {
  function handleClickOutside(event: Event) {
    if (ref.value && !ref.value.contains(event.target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
}
