<template>
  <li @click="handleClick">
    <img :src="album.image[index]">
  </li>
</template>
<script>

export default {
  props: {
    album: Object,
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

p {
  margin: 5%;
}

</style>
