<template>
  <div class="principal">
    <img class="back" @click="back" src="../../../assets/back.svg" alt="back" />
    <div v-if="loadData">
      <div class="playOrPause" @click="playOrPause">
        <img
          v-if="statePlayOrPause"
          class="play"
          src="../../../assets/play.svg"
          alt="play"
        />
        <img v-else class="pause" src="../../../assets/pause.svg" alt="pause" />
      </div>
    </div>
    <div v-else class="loading"><p>Cargando..</p></div>
    <img class="next" @click="next" src="../../../assets/next.svg" alt="next" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Principal",
  computed: {
    ...mapState(["statePlayOrPause", "loadData"]),
  },
  methods: {
    ...mapMutations(["back", "next", "playOrPause"]),
  },
};
</script>

<style scoped>
.principal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pause {
  width: 60px;
  height: 60px;
}

.playOrPause {
  margin: 20px;
}

.loading {
  height: 60px;
  width: 60px;
  margin: 20px;
  border-radius: 50%;
  color: #fff;
  background-color: #6abdff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  animation-name: turn;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes turn {
  0% {
    transform: rotateZ(0);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

img {
  cursor: pointer;
}

@media (max-width: 520px) {
  .loading {
    font-size: 12px;
  }
}
</style>
