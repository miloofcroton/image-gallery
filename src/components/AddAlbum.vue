<template>
  <main>
    <h1>Don't give us a bad name</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Title: <input v-model="title">
      </label>
      <label>
        Description: <input v-model="description">
      </label>
      <button type="submit" > {{ isNew ? 'Add' : 'Update' }}</button>
      <button type="button">Cancel</button>
    </form>
  </main> 

</template>

<script>

export default {
  props: {
    album: Object,
    onAdd: Function
  },
  data() {
    return {
      title: '',
      description: '',
    };
  },
  computed: {
    isNew() {
      return !this.album;
    }
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
      this.onAdd(album);
    }
  }

};
</script>

<style scoped>

</style>
