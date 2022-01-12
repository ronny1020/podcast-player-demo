<template>
  {{ channel }}
</template>

<script setup lang="ts">
import { computed } from 'vue'
import usePodcastListStore from '../../store/podcastListStore'

const podcastListStore = usePodcastListStore()

const channel = computed(() => podcastListStore.rss?.channel)
</script>
