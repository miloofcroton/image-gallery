<template>
  <main>
    <h1>Show us your brotography!</h1>
    <form>
      <label>
        Title: <input v-model="title">
      </label>
      <label>
        Description: <input v-model="description">
      </label>
      <button type="submit"> {{ isNew ? 'Add' : 'Update' }}</button>
      <button type="button">Cancel</button>
    </form>
  </main> 

</template>

<script>
export default {
  props: {
    album: Object,
  },
  data() {
    return {
      title: '',
      description: '',
    }
  },
  computed: {
    isNew() {
      return !this.album;
    }
  },

};
</script>

<style scoped>

</style>
