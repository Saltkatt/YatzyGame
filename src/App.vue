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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  background-image: url("./assets/wood-table.jpg");
}


.btn{
  background-color:sienna;
  color:wheat;
  padding: 10px;
  cursor:pointer;

}
.btn:hover{
  filter:brightness(15%)
}

/* Desktop */
@media screen and (min-width: 501px){


}

/* Small Screen */
@media screen and (max-width: 500px){
  
}
</style>
