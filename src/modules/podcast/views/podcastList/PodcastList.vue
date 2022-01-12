<template>a</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import updatePodcastList from '../../application/updatePodcastList'

onMounted(() => {
  void updatePodcastList()
})
</script>

<style lang="scss">
@import '@/styles';
</style>
