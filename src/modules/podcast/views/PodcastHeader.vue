<template>
  <Skeleton v-if="!channel" active />

  <div v-else class="header-wrapper">
    <div class="back-icon">
      <router-link v-if="!atHomePage" to="/">
        <ArrowLeftOutlined />
      </router-link>
    </div>
    <header>
      <Image :width="300" :src="channel?.image.url" alt="channel image" />
      <div class="content">
        <h1>{{ channel?.title }}</h1>
        <p>{{ channel?.description }}</p>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeftOutlined } from '@ant-design/icons-vue'
import { Image, Skeleton } from 'ant-design-vue'
import usePodcastListStore from '../store/podcastListStore'
import router from '@/router'

const atHomePage = computed(() => router.currentRoute.value.path === '/')

const podcastListStore = usePodcastListStore()

const channel = computed(() => podcastListStore.rss?.channel)
</script>

<style lang="scss" scoped>
.back-icon {
  height: 50px;
  font-size: 2rem;
  cursor: pointer;
}

header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  background: #1d1d1d;

  .content {
    align-self: end;
    margin: 1rem;
  }
}
</style>
