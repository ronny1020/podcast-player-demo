<template>
  <div class="player-wrapper">
    <audio id="player" :src="audioUrl" type="audio/mpeg" controls />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Props {
  audioUrl: string
}

const props = defineProps<Props>()

const { audioUrl } = reactive(props)
</script>

<style lang="scss" scoped>
.player-wrapper {
  width: 100%;

  audio {
    display: block;
    width: 100%;
  }
}
</style>
