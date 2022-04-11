<script setup lang="ts">
import { ref } from 'vue'
import { useOnClickOutside } from '@/composables/useOnClickOutside'

const container = ref(null)

useOnClickOutside(container, () => {
  console.log('click outside')
})
</script>
<template>
  <div>
    <div ref="container">View</div>
  </div>
</template>
