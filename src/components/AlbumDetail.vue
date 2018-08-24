<template>
  <main>
    <h2> {{ album.title }}</h2>
    <p> {{ album.description }}</p>
    
    <p>
      <router-link to="/detail/:key/new">Add a new image</router-link>
    </p>

    <p>
      <router-link to="/detail/:key/thumbnail">Thumbnail View</router-link>
      <router-link to="/detail/:key/list">List View</router-link>
      <router-link to="/detail/:key/gallery">Gallery View</router-link>
    </p>

    <router-view :images="images"></router-view>

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
