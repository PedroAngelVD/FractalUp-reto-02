<template>
  <div id="app">
    <Header />
    <Podcasts :podcasts="podcasts" />
    <Player />
  </div>
</template>

<script>
import Header from './components/Header'
import Player from './components/Player/Player'
import Podcasts from './components/Podcasts/Podcasts'

export default {
  name: 'App',
  components: {
    Header,
    Player,
    Podcasts,
  },
  data() {
    return { podcasts: [] }
  },
  async created() {
    const response = await fetch(
      'https://api.audioboom.com/channels/recommended'
    )
    const data = await response.json()
    this.podcasts = data.body
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
</style>
