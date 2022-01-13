const audio = new Audio()

export function playAudio() {
  void audio.play()
}

export function pauseAudio() {
  audio.pause()
}

export default audio
