<template>
  <main>
    <p> {{ album.name }}</p>
    <p> {{ album.description }}</p>
  </main>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      album: albums.selected,
    }
  },
  props: {
    albums: Object,
    selected: String,
  }
};
</script>

<style scoped>

</style>
