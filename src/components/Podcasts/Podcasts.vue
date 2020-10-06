<template>
  <div class="container">
    <div v-if="podcasts.length === 0" class="spinner">
      <img src="../../assets/fractalup_spinner.jpg" alt="fractalup_spinner" />
      <h1 class="loading">Cargando..</h1>
    </div>
    <div v-else class="podcasts">
      <div
        class="podcast-container"
        v-for="(podcast, index) in podcasts"
        :key="index"
      >
        <Podcast :data="podcast" />
      </div>
    </div>
  </div>
</template>

<script>
import Podcast from "./Podcast";

export default {
  name: "Podacts",
  components: {
    Podcast,
  },
  props: {
    podcasts: Array,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  margin-top: 75px;
}

.spinner {
  margin: 100px;
}

.spinner img {
  width: 200px;
  animation-name: turn;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  z-index: -10;
}

.loading {
  margin-top: 20px;
  text-align: center;
}

@keyframes turn {
  0% {
    transform: rotateZ(0);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

.podcasts {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-content: start;
  gap: 15px;
  padding: 15px;
}

.podcast-container {
  height: 210px;
  width: 145px;
}

@media (max-width: 420px) {
  .podcasts {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 420px) {
  .podcasts {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 520px) {
  .podcasts {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .podcasts {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .podcasts {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1200px) {
  .podcasts {
    grid-template-columns: repeat(7, 1fr);
  }
}

@media (min-width: 1300px) {
  .podcasts {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (min-width: 1440px) {
  .podcasts {
    grid-template-columns: repeat(9, 1fr);
  }
}

@media (min-width: 1600px) {
  .podcasts {
    grid-template-columns: repeat(10, 1fr);
  }
}
</style>
