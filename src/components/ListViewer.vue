<template>
  <ul>
    <h2>I'm the list viewer!</h2>
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


ul.list-view {
  display: block;
  text-align: left;
}

ul.list-view li {
  text-align: left;
  border: none;
}

</style>
