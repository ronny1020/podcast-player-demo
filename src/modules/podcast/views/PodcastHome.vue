<template>
  <div class="container">
    <PodcastHeader />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import PodcastHeader from './PodcastHeader.vue'
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 1rem auto;
}
</style>
