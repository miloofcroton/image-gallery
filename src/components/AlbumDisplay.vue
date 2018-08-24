<template>
  <section>
    <h3>{{ album.title }}</h3>
    <p>{{ album.description }}</p>
  </section>
</template>

<script>

export default {
  props: {
    album: Object
  }
};

</script>

<style>

</style>
