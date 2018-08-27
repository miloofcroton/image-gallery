<template>
  <ImageForm 
    :onComplete="handleAdd"
    :onCancel="handleEndEdit"
    :onUpdate="handleUpdate"
    :image="image"
    :album="album"
  />
</template>

<script>
import ImageForm from './ImageForm.vue';
import albumApi from '../services/albumApi';

export default {
  props: {
    album: Object,
    image: Object,
  },
  components: {
    ImageForm
  },
  
  methods: {
    handleAdd(image) {
      const added = albumApi.addImage(image); //where to get key?
      console.log(added)
      this.$router.push(`/albums/${added}`); //this isn't right
      
},
  handleUpdate(album) {
      this.onUpdate(album);
      this.handleEndEdit();
    },  
    handleEndEdit() {
      this.editing = false;
    },
  },
}
</script>

<style>

</style>
