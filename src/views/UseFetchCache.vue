<script setup lang="ts">
import ApiComponent from '@/components/ApiComponent.vue'
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <ApiComponent />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </main>
</template>
