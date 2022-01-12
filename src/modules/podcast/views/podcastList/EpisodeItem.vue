<template>
  <div class="wrapper">
    <Image
      :width="100"
      :src="episode?.['itunes:image'] || channelImageUrl"
      alt="channel image"
    />
    <div class="content">
      <h3>{{ episode?.title }}</h3>
      <span class="datetime">
        {{ datetime }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { Image } from 'ant-design-vue'
import moment from 'moment'
import { EpisodeItem } from '../../models/rss'

interface Props {
  episode: EpisodeItem
  channelImageUrl: string
}

const props = defineProps<Props>()

const { episode, channelImageUrl } = reactive(props)

const datetime = computed(() => moment(episode.pubDate).format('YYYY-MM-DD'))
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.25rem;
  background: #1d1d1d;

  .content {
    margin: 1rem;

    .datetime {
      color: #999;
    }
  }
}
</style>
