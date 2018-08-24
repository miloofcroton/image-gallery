<template>
  <ul>
    <Album v-for="album in albumDB"
      :key="album.title"
      :album="album"  
    />
    <li id="add-album"></li>
  </ul>
</template>

<script>
import Album from './Album';

export default {
  props: {
    albumDB: Array
  },
  components: {
    Album
  }
};
</script>

<style scoped>

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

}

li {
  width: 250px;
  height: 250px;
  justify-self: center;
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}

#add-album {
  background-image: url('../assets/plus-sign.png');
  background-size: contain;
  background-repeat: no-repeat;

}

</style>
