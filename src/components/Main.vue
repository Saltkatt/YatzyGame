<template>
    <div class="container">
         <header>
        <!-- Navigation Bar -->
            <nav class="nav-bar">
                <ul>
                    <button class="btn rulesButton" @click="showRules()">?</button>
                    <button class="btn newGame" @click="resetGame()">Nytt Spel</button>
                    <div class="rounds">Rounds: {{getRounds}}</div>
                </ul>

            </nav>
    </header>
       
        <div class="main-layout">
        <Protocol></Protocol>
        <Dice></Dice>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Protocol from '../components/Protocol.vue'
import Dice from '../components/Dice.vue'
export default {
    name: "Main",
    components: {
        Protocol,
        Dice
    },
    methods: {
        resetGame(){
            this.replay();
        },

        replay: function() {
            this.$store.dispatch('replay');
        }

    },
    computed: {...mapGetters(['getRounds'])}

};
</script>

<style scoped>
/* Desktop */
@media screen and (min-width: 501px){
  .main-layout{
  display: grid;
  grid-template-columns: auto auto;
}

.btn {
    background-color: indigo;
    border: none;
    border-radius: 20px;
    color: wheat;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 5px; 
    cursor: pointer;
    width: 60px;
}

.newGame {
    width: 110px;
}

.btn:hover{
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

}



}
</style>
