<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import updatePodcastList from './modules/podcast/application/updatePodcastList'

onMounted(() => {
  void updatePodcastList()
})
</script>

<style lang="scss">
@import '@/styles';
</style>
