<template>
  <div class="app">
    <Header/>
    <router-view :albumDB="albumDB"></router-view>
  </div>
</template>

<script>

import Header from './components/Header';
import albumDB from './services/albumDB';

export default {
  name: 'app',
  data() {
    return {
      albumDB
    };
  },
  components: {
    Header
  }

};
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
