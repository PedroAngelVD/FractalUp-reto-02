<template>
  <header>
    <a href="/">
      <img src="../assets/logo.png" alt="logo" />
    </a>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2196f3;
}

img {
  display: block;
}
</style>
