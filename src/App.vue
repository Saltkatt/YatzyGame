<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Main></Main>
    
    <div class="main-layout">
    <Protocol></Protocol>
    <Dice></Dice>
    </div>
    

  </div>
</template>

<script>
import Main from './components/Main.vue'
import Protocol from './components/Protocol.vue'
import Dice from './components/Dice.vue'


export default {
  name: 'app',
  components: {
    Main,
    Protocol,
    Dice,
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
  margin-top: 60px;
}

.main-layout{
  display: grid;
  grid-template-columns: auto auto;
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
</style>
