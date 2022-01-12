<template>
  <Skeleton v-if="!channel" active />
  <header v-else>
    <Image :width="300" :src="channel?.image.url" alt="channel image" />
    <h1>{{ channel?.title }}</h1>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Image, Skeleton } from 'ant-design-vue'
import usePodcastListStore from '../store/podcastListStore'

const podcastListStore = usePodcastListStore()

const channel = computed(() => podcastListStore.rss?.channel)
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  background: #1d1d1d;

  h1 {
    align-self: end;
    margin-left: 3rem;
  }
}
</style>
