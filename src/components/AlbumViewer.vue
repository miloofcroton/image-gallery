<template>

  <div class="album-viewer">
    <section v-if="album">
      <p v-if="!editing">
        <button @click="editing = true">Edit</button>
      </p>

      <AlbumForm 
        v-if="editing" 
        :album="album"
        :onUpdate="handleUpdate"
        :onCancel="handleEndEdit"      
      />

      <AlbumDisplay v-else :album="album"/>
      
    </section>

    <section v-else>
      <p>Please choose an album</p>
    </section>
  </div>
</template>

<script>

import AlbumForm from './AlbumForm.vue';
import AlbumDisplay from './AlbumDisplay.vue';

export default {
  props: {
    album: Object,
    onUpdate: Function
  },
  data() {
    return { 
      editing: false
    };
  },
  watch: {
    album(newAlbum, oldAlbum) {
      if(newAlbum !== oldAlbum) {
        this.editing = false;
      }
    }
  },
  components: {
    AlbumForm,
    AlbumDisplay
  },
  methods: {
    handleEndEdit() {
      this.editing = false;
    },
    handleUpdate(album) {
      this.onUpdate(album);
      this.handleEndEdit();
    }
  }
  // methods: {
  //   handleAdd(album) {
  //     const added = albumApi.addAlbum(album);
  //     this.$router.push(`/albums/${added.key}`);
  //   },
  // }
};
</script>

<style scoped>

</style>
