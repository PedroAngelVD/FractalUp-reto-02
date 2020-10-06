<template>
  <div class="description">
    <img
      v-if="currentClip.urls.image !== undefined"
      :src="currentClip.urls.image"
      :alt="currentClip.title"
    />
    <img v-else src="../../assets/image_default.png" :alt="currentClip.title" />
    <div class="info">
      <p class="title">{{ currentClip.title }}</p>
      <p class="channelTitle">{{ currentClip.channel.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    currentClip: Object,
  },
};
</script>

<style scoped>
.description {
  display: flex;
}

img {
  height: 100px;
  width: 100px;
  object-fit: cover;
}

.info {
  padding: 20px;
}

p {
  font-style: normal;
  color: #fff;
}

.title {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  width: 250px;
}

.channelTitle {
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
}
</style>
