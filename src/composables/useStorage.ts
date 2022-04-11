import { ref } from 'vue'

const getItem = (key: string, storage: any) => {
  const value = storage.getItem(key)
  if (!value) {
    return null
  }
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

export const useStorage = (key: string, type = 'session') => {
  let storage = null
  switch (type) {
    case 'session':
      storage = sessionStorage
      break
    case 'local':
      storage = localStorage
      break
    default:
      return null
  }
  const value = ref(getItem(key, storage))
  const setItem = (storage: any) => {
    return (newValue: any) => {
      value.value = newValue
      storage.setItem(key, JSON.stringify(newValue))
    }
  }
  return [value, setItem(storage)]
}
