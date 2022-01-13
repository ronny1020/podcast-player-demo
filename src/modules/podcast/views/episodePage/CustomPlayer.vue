<template>
  <div class="player-wrapper">
    <Slider
      :value="currentTime"
      :max="audio.duration"
      :tip-formatter="formateSecondsNumber"
      @change="handleChangeCurrentTime"
    />

    <div class="button-group">
      <Button type="text" shape="circle">
        <StepBackwardOutlined />
      </Button>

      <Button v-if="isPlaying" type="text" shape="circle" @click="pauseAudio">
        <PauseOutlined />
      </Button>

      <Button v-else type="text" shape="circle" @click="playAudio">
        <CaretRightOutlined />
      </Button>

      <Button type="text" shape="circle">
        <StepForwardOutlined />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  CaretRightOutlined,
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons-vue'
import { Slider, Button } from 'ant-design-vue'
import audio, { playAudio, pauseAudio } from '../../application/audio'
import formateSecondsNumber from '@/shared/utils/formateSecondsNumber'

interface Props {
  audioUrl: string
}

const props = defineProps<Props>()

const currentTime = ref(0)

function handleChangeCurrentTime(value: number) {
  audio.currentTime = value
}

function timeupdateListener() {
  currentTime.value = audio.currentTime || 0
}

const isPlaying = ref(false)

function playListeners() {
  isPlaying.value = true
}

function pauseListeners() {
  isPlaying.value = false
}

onMounted(() => {
  audio.src = props.audioUrl

  audio.addEventListener('timeupdate', timeupdateListener)
  audio.addEventListener('play', playListeners)
  audio.addEventListener('pause', pauseListeners)
})

onUnmounted(() => {
  audio.src = ''

  audio.removeEventListener('timeupdate', timeupdateListener)
  audio.removeEventListener('play', playListeners)
  audio.removeEventListener('pause', pauseListeners)
})
</script>

<style lang="scss" scoped>
.player-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 3rem;
  background: rgb(14 14 14);

  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;

    .ant-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
      line-height: 0;
    }
  }
}
</style>
