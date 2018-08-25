<template>
  <main>
    <h2> {{ album.title }}</h2>
    <p> {{ album.description }}</p>
    
    <p>
      <router-link to="new">Add a new image</router-link>
    </p>

    <p>
      <router-link to="thumbnail">Thumbnail View</router-link>
      <router-link to="list">List View</router-link>
      <router-link to="gallery">Gallery View</router-link>
    </p>

    <router-view :album="album"></router-view>

  </main>
</template>

<script>
import albumApi from '../services/albumApi';


export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      album: albumApi.getAlbum(this.$route.params.key),
    };
  },
  props: {
    selectedAlbum: String,
  }
};
</script>

<style scoped>

h2 {
  font-size: 32px;
}

p {
  font-size: 16;
}

</style>
