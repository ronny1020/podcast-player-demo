<template>
  <router-link
    v-for="episode of episodes"
    :key="episode.guid"
    :to="`/episode/${episode.guid}`"
  >
    <EpisodeItem :episode="episode" :channel-image-url="channelImageUrl" />
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import EpisodeItem from './EpisodeItem.vue'
import usePodcastListStore from '../../store/podcastListStore'

const podcastListStore = usePodcastListStore()

const episodes = computed(() => podcastListStore.rss?.channel.item)
const channelImageUrl = computed(
  () => podcastListStore.rss?.channel.image.url || ''
)
</script>
