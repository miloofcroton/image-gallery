<template>
  <ul class="tile-view">
    <ImageCard v-for="image in album.images"
    :key="image.key"
    :image="image"
    />
  </ul>
</template>

<script>
import ImageCard from './ImageCard';

export default {
  props: {
    album: Object
  },
  components: {
    ImageCard
  }
};
</script>

<style scoped>

ul.list-view {
  display: block;
  text-align: left;
}

ul.list-view li {
  text-align: left;
  border: none;
}
</style>
