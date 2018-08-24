<template>
  <main>
    <h1>Don't give us a bad name</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Title: <input v-model="title">
      </label>
      <label>
        Decription: <textarea v-model="description"></textarea>
      </label>
      <button type="submit" > {{ isNew ? 'Add' : 'Update' }}</button>
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
      title: '',
      description: ''
    };
  },
  computed: {
    isNew() {
      return this.album === undefined;
    }
  },
  created() {
    const album = this.album;
    if(this.isNew) return;

    this.title = album.title;
    this.description = album.description;
  },
  methods: {
    handleSubmit() {
      const album = {
        title: this.title,
        description: this.description
      };
      if(!this.isNew) {
        album.key = this.album.key;
      }
      this.onComplete(album);
    }
  }
};

</script>

<style>

</style>

