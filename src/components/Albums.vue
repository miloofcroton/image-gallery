<template>
  <ul>
    <Album v-for="album in albums"
      :key="album.title"
      :album="album"  
      :selected="selected"
      :onSelect="handleSelect"
    />
    <li id="add-album">
      <router-link to="/add"><img src="../assets/plus-sign.png"></router-link>
    </li>
  </ul>
</template>

<script>
import Album from './Album';


export default {
  props: {
    albums: Array,
    selected: String,
    onSelect: Function
  },
  components: {
    Album
  },
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

img {
  height: 250px;

}



</style>
