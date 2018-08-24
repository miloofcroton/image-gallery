<template>
  <main>
    <h1>Add a new image</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Url: <input v-model="imageURL">
      </label>
      <button type="submit">Add</button>
      <button v-if="onCancel" type="button" @click="onCancel">Cancel</button>
    </form>
  </main> 

</template>



<script>
export default {
  props: {
    album: Object,
    onComplete: Function,
    onCancel: Function
  },
  data() {
    return {
      key: '',
      imageURL: '',
    };
  },
  created() {
    const image = this.image;
    this.imageURL = image.title;
  },
  methods: {
    handleSubmit() {
      const image = {
        title: this.imageURL,
      };

      // the rest of this is wrong

      // album.key = this.album.key;
      // this.onComplete(album);
    }
  }
};

</script>

<style>

</style>

