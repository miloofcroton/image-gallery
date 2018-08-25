<template>
  <li @click="handleClick">
    <p>{{ image.title }}</p>
    <p>{{ image.description }}</p>
    <img :src="image.url">
  </li>
</template>
<script>

export default {
  props: {
    image: String,
    selectedAlbum: Object,
    onSelect: Function,
  },
  methods: {
    handleClick() {
      this.onSelect(this.album);
    }
  },
};
</script>

<style scoped>

img {
  width: 250px;
  height: 250px;
}

</style>
