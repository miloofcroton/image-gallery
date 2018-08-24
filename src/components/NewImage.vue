<template>
  <ImageForm 
    :onComplete="handleAdd"
    :onCancel="handleEndEdit"
    :onUpdate="handleUpdate"
    :image="image"
  />
</template>

<script>
import ImageForm from './ImageForm.vue';
import albumApi from '../services/albumApi';

export default {
  components: {
    ImageForm
  },
  methods: {
    handleAdd(album) {
      const added = albumApi.addImage(album, key); //where to get key?
      this.$router.push(`/albums/${added.key}`); //this isn't right
    }
  }
};
</script>

<style>

</style>
