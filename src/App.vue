<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Main></Main>
    <Protocol></Protocol>
    <Dice></Dice>

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
