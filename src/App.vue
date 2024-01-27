<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useBusinessStore } from '@/stores/business'
const businessStore = useBusinessStore()
const { getBusiness } = businessStore
onMounted(async () => {
  await getBusiness()
})


</script>

<template>
  <body>
    <RouterView />
  </body>
</template>

