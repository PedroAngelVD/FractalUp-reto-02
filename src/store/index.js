import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    clips: [],
    currentClip: {},
    indexCurrentClip: 0,
    audio: new Audio(''),
    statePlayOrPause: true,
    volume: 0.5,
    muted: false,
    loadData: true,
  },

  mutations: {
    loadClips(state, listClips) {
      state.clips = listClips
      state.indexCurrentClip = 0
      store.commit('loadClip')
    },
    loadClip(state) {
      state.loadData = false
      state.audio.pause()
      state.currentClip = state.clips[state.indexCurrentClip]
      state.audio = new Audio(state.currentClip.urls.high_mp3)
      state.audio.autoplay = true
      state.audio.volume = state.volume
      state.statePlayOrPause = false
      state.audio.addEventListener('ended', () => store.commit('next'))
      state.audio.addEventListener('loadeddata', () => {
        state.loadData = true
      })
    },
    back(state) {
      if (state.indexCurrentClip !== 0) {
        state.indexCurrentClip--
        store.commit('loadClip')
      }
    },
    playOrPause(state) {
      if (state.audio.paused) {
        state.audio.play()
      } else {
        state.audio.pause()
      }
      state.statePlayOrPause = !state.statePlayOrPause
    },
    next(state) {
      if (state.indexCurrentClip !== state.clips.length - 1) {
        state.indexCurrentClip++
        store.commit('loadClip')
      }
    },
    rangeVolume(state, value) {
      state.volume = value
      state.audio.volume = value
    },
    muteClip(state) {
      state.audio.muted = !state.audio.muted
      state.muted = state.audio.muted
    },
  },
})

export default store
