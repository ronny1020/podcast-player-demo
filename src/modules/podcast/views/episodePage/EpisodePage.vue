<template>
  <div
    v-if="currentEpisode"
    class="description"
    v-html="currentEpisode['content:encoded']"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import findEpisodeByGuid from '../../domain/findEpisodeByGuid'
import usePodcastListStore from '../../store/podcastListStore'
import router from '@/router'

const guid = computed(() => router.currentRoute.value.params.guid as string)

const podcastListStore = usePodcastListStore()

const currentEpisode = computed(() =>
  podcastListStore.rss && guid.value
    ? findEpisodeByGuid(podcastListStore.rss, guid.value)
    : null
)
</script>

<style lang="scss" scoped>
.description {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.25rem;
  background: #1d1d1d;
}
</style>
