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

a {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 10px;
  padding: 6px;
  border-radius: 15px;
  color: white;
  box-shadow: 2px 2px 5px #223ee0;
  text-decoration: none;
  text-shadow: 1px 1px #223ee0;
  background-color: #000d55;
}

h2 {
  font-size: 32px;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 16;
}

a:hover {
  background-color: rgb(92, 105, 250);
}

</style>
