import { ref, computed, reactive } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'

export const useFetch = (url: string, config = {}) => {
  const data = ref(null) as Ref<any>
  const response = ref(null) as Ref<any>
  const error = ref(null) as Ref<any>
  const loading = ref(false) as Ref<boolean>

  const fetch = async () => {
    loading.value = true
    try {
      const result = await axios.request({
        url,
        ...config,
      })
      response.value = result
      data.value = result.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  fetch()

  return { data, response, error, loading, fetch }
}

const cacheMap = reactive(new Map())

export const useFetchCache = (key: string, url: string, config = {}) => {
  const info = useFetch(url, { skip: true, ...config })

  const update = () => cacheMap.set(key, info.response.value)
  const clear = () => cacheMap.set(key, undefined)

  const fetch = async () => {
    try {
      await info.fetch()
      update()
    } catch {
      clear()
    }
  }

  const response = computed(() => cacheMap.get(key))
  const data = computed(() => response.value?.data)

  if (response.value === null) fetch()

  return { ...info, fetch, data, response, clear }
}
