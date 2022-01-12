<template>
  <router-link
    v-for="episode of episodesToRender"
    :key="episode.guid"
    :to="`/episode/${episode.guid}`"
  >
    <EpisodeItem :episode="episode" :channel-image-url="channelImageUrl" />
  </router-link>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import EpisodeItem from './EpisodeItem.vue'
import usePodcastListStore from '../../store/podcastListStore'

const podcastListStore = usePodcastListStore()

const channelImageUrl = computed(
  () => podcastListStore.rss?.channel.image.url || ''
)

const episodes = computed(() => podcastListStore.rss?.channel.item)
const episodesNumberToRender = ref(10)
const episodesToRender = computed(() =>
  episodes.value?.slice(0, episodesNumberToRender.value)
)

function listenScrollToAddEpisodesNumberToRender() {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement
  if (
    scrollTop + clientHeight >= scrollHeight &&
    (episodes.value?.length || 0) > episodesNumberToRender.value
  ) {
    episodesNumberToRender.value += 10
  }
}

onMounted(() => {
  window.addEventListener('scroll', listenScrollToAddEpisodesNumberToRender)
})

onUnmounted(() => {
  window.removeEventListener('scroll', listenScrollToAddEpisodesNumberToRender)
})
</script>
