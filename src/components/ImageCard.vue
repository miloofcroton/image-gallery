<template>
  <li @click="handleClick">
    <img :src="image.url">
    <section>
      <p>{{ image.title }}</p>
      <p>{{ image.description }}</p>
    </section>
  </li>
</template>
<script>

export default {
  props: {
    image: String,
    selectedAlbum: Object,
    onSelect: Function,
  },
  methods: {
    handleClick() {
      this.onSelect(this.album);
    }
  },
};
</script>

<style scoped>

img {
  width: 200px;
  height: 200px;
}

li {
  cursor: pointer;
  
  padding: 5px 0px;
  list-style: none;
  text-align: center;
  justify-self: center;
  border: 1px solid rgb(177, 255, 242);
  border-radius: 12px;
  color: white;
  box-shadow: 1px 1px 3px #223ee0;
  text-shadow: 3px 3px #223ee0;
  background-color: #000d55;
}

</style>
