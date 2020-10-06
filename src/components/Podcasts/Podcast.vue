<template>
  <div class="pod" @click="getClips(data.id)">
    <img :src="data.urls.logo_image.original" :alt="data.title" />
    <p>{{ data.title }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'podcast',
  props: {
    data: Object,
  },
  methods: {
    async getClips(id) {
      const response = await fetch(
        `https://api.audioboom.com/channels/${id}/audio_clips`
      )
      const data = await response.json()
      this.loadClips(data.body.audio_clips)
    },

    ...mapMutations({ loadClips: 'loadClips' }),
  },
}
</script>

<style scoped>
.pod {
  cursor: pointer;
}

img {
  width: 100%;
  margin-bottom: 3.8px;
}
p {
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  line-height: 17px;
}
</style>
