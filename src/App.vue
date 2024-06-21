<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
