<script lang="ts">
export default {
  name: 'ApiComponent',
}
</script>
<script setup lang="ts">
import { useFetchCache } from '@/composables/useFetch'
import { onBeforeMount } from 'vue'

// useFetch
// const { fetch, response, data } = useFetch(
//   'https://ecomm-products.modus.workers.dev/',
//   {
//     method: 'get',
//   }
// )

// const fetchProducts = async () => {
//   await fetch()
//   return data
// }

// onBeforeMount(async () => {
//   await fetchProducts()
// })

// useFetchCache
const { fetch, data, loading } = useFetchCache(
  'products',
  'https://ecomm-products.modus.workers.dev/',
  {
    method: 'get',
  }
)

const fetchProducts = async () => {
  await fetch()
  return data
}

onBeforeMount(async () => {
  await fetchProducts()
})
</script>
<template>
  <div>
    <h1>Products</h1>
    <span v-if="loading">Loading...</span>
    <ul v-else>
      <li v-for="(product, index) in data" :key="index">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>
