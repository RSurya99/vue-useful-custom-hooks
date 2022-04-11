<script setup lang="ts">
import { useStorage } from '@/composables/useStorage'
import { ref } from 'vue'

const [token, setToken] = useStorage('token')
const inputToken = ref<string>('')

const updateToken = () => {
  setToken(inputToken.value)
}
</script>
<template>
  <div>
    <h1>UseStorage</h1>
    <p>token: {{ token ? token : "there's no token in storage" }}</p>
    <input type="text" name="inputToken" id="inputToken" v-model="inputToken" />
    <button @click="updateToken">Update Token</button>
  </div>
</template>
