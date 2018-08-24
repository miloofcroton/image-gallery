<template>
  <header>
    <h1>Brogram</h1>
    <p>Are you with the Brogram?</p>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/albums">Albums</router-link>
  </header>  
</template>

<script>
export default {

};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Monoton');

h1 {
  font-size: 96px;
  font-family: 'Monoton', cursive;
  font-weight: normal;
  margin: 0px auto;
}

p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

img {
  width: 150px;
}



</style>
