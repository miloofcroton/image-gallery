<template>
  <header>
    <h1>Shot in the Dark</h1>
    <p>Photos that aren't too late</p>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/albums">Albums</router-link>
    </nav>
  </header>  
</template>

<script>
export default {

};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Monoton');
@import url('https://fonts.googleapis.com/css?family=Rajdhani');
@import url('https://fonts.googleapis.com/css?family=Roboto');

header {
  box-shadow: 2px 2px 5px #000d55;
}

h1, p, a {
  color: #000d55;
}

h1 {
  font-size: 96px;
  font-family: 'Monoton', cursive;
  font-weight: normal;
  margin: 0px auto;
}

p {
  font-family: 'Rajdhani', sans-serif;
  font-size: 24px;
}

nav {
  padding: 15px;
}

a {
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  margin: 10px;
  padding: 6px;
  border: 1px solid #000d55;
  border-radius: 15px;
  box-shadow: 1px 1px 3px #000d55;
  text-decoration: none;
}

a:hover {
  background-color: rgb(173, 176, 206);
}



img {
  width: 150px;
}



</style>
