<template>
  <ul class="tile-view">
    <h2>I'm the thumbnail viewer!</h2>
    <Image v-for="image in images"
    :key="image.index"
    :image="image"
    />
  </ul>
</template>

<script>
import Image from './Image';

export default {
  props: {
    images: Array
  },
  components: {
    Image
  }
};
</script>

<style scoped>

ul.tile-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}

</style>
