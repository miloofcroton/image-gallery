<template>
  <div class="app">
    <Header/>
    <router-view 
      :albums="albums"
      :onAdd="handleAdd"
      :selected="selectedAlbum"
    >

    </router-view>
  </div>
</template>

<script>

import Header from './components/Header';

export default {
  name: 'app',
  data() {
    return {
      selectedAlbum: null,
    };
  },
  components: {
    Header
  },
  methods: {

  },
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
