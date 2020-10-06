<template>
  <div class="sound">
    <input
      type="range"
      min="0"
      max="1"
      :value="volume"
      step="0.1"
      class="rangeVolume"
      @change="rangeVolume($event.target.value)"
    />
    <Volume />
  </div>
</template>

<script>
import Volume from "./Volume";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Sound",
  components: {
    Volume,
  },
  computed: {
    ...mapState(["volume"]),
  },
  methods: {
    ...mapMutations({ rangeVolume: "rangeVolume" }),
  },
};
</script>

<style scoped>
.sound {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.rangeVolume {
  -webkit-appearance: none;
  background: #fff;
  width: 100px;
  height: 6px;
  border-radius: 10px;
  cursor: pointer;
}

.rangeVolume::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
