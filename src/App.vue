<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Yatzy"/>
    <Protocol></Protocol>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Protocol from './components/Protocol.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Protocol
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
