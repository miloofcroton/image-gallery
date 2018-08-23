<template>
  <main>
    <h1 v-for="album in albumDB"
      :key="album.title"
      :album="album"  
    >
      {{album.title}}
    </h1>
  </main>
</template>

<script>
export default {
  props: {
    albumDB: Array
  }
};
</script>

<style scoped>

</style>
