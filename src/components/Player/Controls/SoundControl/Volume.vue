<template>
  <div @click="muteClip" class="volume">
    <img
      v-if="muted || volume == 0"
      src="../../../../assets/volume-mute-solid.svg"
      alt="volume-mute"
    />

    <img v-else src="../../../../assets/volume-up-solid.svg" alt="volume-up" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Volume",
  computed: {
    ...mapState(["muted", "volume"]),
  },
  methods: {
    ...mapMutations(["muteClip"]),
  },
};
</script>

<style scoped>
.volume {
  width: 40px;
  height: 40px;
  margin: 30px;
}

img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
