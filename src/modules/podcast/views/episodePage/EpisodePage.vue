<template>
  <div class="description">
    <Affix v-if="isPlayerHidden" :offset-top="120">
      <Button type="primary" shape="round" size="large" @click="startPlay">
        Play
      </Button>
    </Affix>

    <h2>{{ title }}</h2>

    <p v-if="currentEpisode" v-html="currentEpisode['content:encoded']" />
  </div>

  <div class="player-space" />

  <CustomPlayer
    :key="currentEpisode?.enclosure['@_url'] || ''"
    :audio-url="currentEpisode?.enclosure['@_url'] || ''"
    :is-hidden="isPlayerHidden"
    @to-next-audio="toNextEpisode"
    @to-prev-audio="toPrevEpisode"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Affix, Button, message } from 'ant-design-vue'
import CustomPlayer from './CustomPlayer.vue'
import { playAudio } from '../../application/audio'
import findEpisodeByGuid from '../../domain/findEpisodeByGuid'
import findTheGuidByEpisodeNumber from '../../domain/findTheGuidByEpisodeNumber'
import usePodcastListStore from '../../store/podcastListStore'
import router from '@/router'

const guid = computed(() => router.currentRoute.value.params.guid as string)

const podcastListStore = usePodcastListStore()

const currentEpisode = computed(() =>
  podcastListStore.rss && guid.value
    ? findEpisodeByGuid(podcastListStore.rss, guid.value)
    : null
)

const isPlayerHidden = ref(true)

const title = computed(() => currentEpisode.value?.title || '')

const episodeNumber = computed(
  () => currentEpisode.value?.['itunes:episode'] || 0
)

function startPlay() {
  playAudio()
  isPlayerHidden.value = false
}

async function changeEpisode(newEpisode: number) {
  if (!podcastListStore.rss) return

  if (newEpisode === 0) {
    void message.info('This is the first episode')
    return
  }

  const newGuid = findTheGuidByEpisodeNumber(
    podcastListStore.rss.channel.item,
    newEpisode
  )

  if (newGuid) {
    await router.push(`/episode/${newGuid}`)
    playAudio()
    return
  }
  void message.info('This is the last episode')
}

function toNextEpisode() {
  if (episodeNumber.value) void changeEpisode(episodeNumber.value + 1)
}

function toPrevEpisode() {
  if (episodeNumber.value) void changeEpisode(episodeNumber.value - 1)
}
</script>

<style lang="scss" scoped>
.description {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.25rem;
  background: #1d1d1d;

  .ant-btn {
    float: right;
  }
}

.player-space {
  height: 100px;
}
</style>
