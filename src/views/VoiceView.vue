<script setup>
import { playAudio } from '../utils/audio';

const play = () => {
  console.log('play')
  playAudio('/src/assets/demo.wav')
}
</script>

<template>
  <div class="voice">
    <h1>This is voice page</h1>
    <div class="controls">
      <button @click="play">play</button>
      <button>stop</button>
      <button>mute</button>
      <button>add</button>
    </div>
    <div style="width: 200px;height: 40px">
      <audio controls src="@/assets/demo.wav"></audio>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .voice {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .controls {
    display: flex;
    gap: 20px;
  }
}
</style>
