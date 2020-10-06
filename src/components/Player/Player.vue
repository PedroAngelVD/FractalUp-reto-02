<template>
  <div v-if="Object.keys(currentClip).length !== 0" class="player">
    <Description class="description control" :currentClip="currentClip" />
    <Principal class="principal control" />
    <Sound class="sound control" />
  </div>
</template>

<script>
import Description from "./Description";
import Principal from "./Controls/Principal";
import Sound from "./Controls/SoundControl/Sound";

import { mapState } from "vuex";

export default {
  name: "Player",
  components: {
    Description,
    Principal,
    Sound,
  },
  computed: {
    ...mapState(["currentClip"]),
  },
};
</script>

<style scoped>
.player {
  width: 100%;
  height: 100px;
  background-color: #2196f3;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  animation-name: up;
  animation-duration: 0.5s;
}

.control {
  width: 33.33%;
}

@keyframes up {
  0% {
    bottom: -100px;
  }

  100% {
    bottom: 0;
  }
}

@media (max-width: 1024px) {
  .sound.control {
    display: none;
  }
}

@media (max-width: 768px) {
  .description.control {
    display: none;
  }

  .player {
    justify-content: center;
  }
}
</style>
