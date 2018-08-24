<template>
  <li>
    <!-- <router-link :to="`/albumDB/${album.key}`"> -->
      <h3>{{ album.title }}</h3>
      <p>{{ album.description }}</p>
    <!-- </router-link> -->
  </li>
</template>

<script>
export default {
  props: {
    album: Object,
    // selected: Object,
    // onSelect: Function
  },
  // methods: {
  //   handleClick() {
  //     this.onSelect(this.album);
  //   }
  // }
};
</script>

<style scoped>

a {
  text-decoration: none;
  color: initial;
}

</style>
