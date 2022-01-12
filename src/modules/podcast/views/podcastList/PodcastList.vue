<template>{{ podcastListStore.rss }}</template>

<script setup lang="ts">
import usePodcastListStore from '../../store/podcastListStore'

const podcastListStore = usePodcastListStore()
</script>

<style lang="scss">
@import '@/styles';
</style>
