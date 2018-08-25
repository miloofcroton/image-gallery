<template>
  <li @click="handleClick">
    <img :src="image">
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

p {
  margin: 5%;
}

</style>
