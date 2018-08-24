<template>
  <div class="app">
    <Header/>
    <router-view 
      :albums="albums"
      :onAdd="handleAdd"
    >

    </router-view>
  </div>
</template>

<script>

import Header from './components/Header';
import albumApi from './services/albumApi';

export default {
  name: 'app',
  data() {
    return {
      albums: albumApi.getAlbums(),
    };
  },
  components: {
    Header
  },
  methods: {
    handleAdd(album) {
      const added = albumApi.addAlbum(album);
      this.$router.push(`/albums/${added.key}`);
    }
  }
};
</script>

<style>

body{
  margin: 0px;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
