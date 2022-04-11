<script setup lang="ts">
import { useViewport } from '@/composables/useViewPort'

const { device } = useViewport({ mobile: 641, tablet: 768, desktop: 1024 })
</script>
<template>
  <div>
    <h1>useViewPort</h1>
    <div>
      <p>device: {{ device }}</p>
    </div>
  </div>
</template>
