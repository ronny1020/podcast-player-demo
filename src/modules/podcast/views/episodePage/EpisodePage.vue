<template>
  <div class="description">
    <Affix v-if="isPlayerHidden" :offset-top="120">
      <Button type="primary" shape="round" size="large" @click="startPlay">
        Play
      </Button>
    </Affix>
    <p v-if="currentEpisode" v-html="currentEpisode['content:encoded']" />
  </div>

  <div class="player-space" />

  <CustomPlayer
    :audio-url="currentEpisode?.enclosure['@_url'] || ''"
    :is-hidden="isPlayerHidden"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Affix, Button } from 'ant-design-vue'
import CustomPlayer from './CustomPlayer.vue'
import { playAudio } from '../../application/audio'
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

const isPlayerHidden = ref(true)

function startPlay() {
  playAudio()
  isPlayerHidden.value = false
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
