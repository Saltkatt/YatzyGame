<template>
  <div id="app">

    <Main></Main>

  
  </div>
</template>

<script>
import Main from './components/Main.vue'
export default {
  name: 'app',
  components: {
    Main,
   
  }
}
</script>

<style>
/* Desktop */
@media screen and (min-width: 501px){
  body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0px;
    background-image: url("./assets/wood-table.jpg");

  }
  #app {
    text-align: center;
    color: #2c3e50;
  }

  .btn{
    background-color: indigo;
    border-radius: 5px;
    cursor:pointer;
  }
  
}


/* Small Screen */
@media screen and (max-width: 500px){
  body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0px;
    background-image: url("./assets/wood-table.jpg");
    /* background-size: cover; */

  }
  #app {
    text-align: center;
    color: #2c3e50;
  
  }
}
</style>
