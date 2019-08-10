<template>
    <div class="container">
         <header>
             
             <h1>YATZY</h1>
        <!-- Navigation Bar -->
            <nav class="nav-bar">
                <ul>
                    <li><button class="btn rulesButton" @click="showRules()">?</button></li>
                    <li><button class="btn newGame" @click="resetGame()">Nytt Spel</button></li>
                    
                </ul>

            </nav>
    </header>
       <br>
        <div class="main-layout">
        <Protocol></Protocol>
        <Dice></Dice>
        <Score></Score>
        <Rules></Rules>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Protocol from '../components/Protocol.vue'
import Dice from '../components/Dice.vue'
import Score from '../components/Score.vue'
import Rules from '../components/Rules.vue'
export default {
    name: "Main",
    components: {
        Protocol,
        Dice,
        Score,
        Rules
    },
    methods: {
        resetGame(){
            this.replay();
        },
        showRules() {
            this.$store.commit("showRules");
        },

        replay: function() {
            this.$store.dispatch('replay');
        },
    },
    computed: {...mapGetters(['getRounds','getShowRules'])}

};
</script>

<style scoped>
.container{
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
}

.h1{
    grid-area: h;
    align-content: center;

}
.nav-bar{
    background-color:lightblue;
    padding: 5px;
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
li{
    display: inline;
    margin: none;
}

.btn {
    
    background-color:yellowgreen;
    border-radius: 5px;
    cursor:pointer;
}

.rulesButton{
    grid-area: rB;
    float: left;
    margin-top: none;
    height: 30px;
    width: 30px;
}

.newGame {
    grid-area: nG;
    height: 30px;
    width: 90px;
    float: right;
}



/* Desktop */
@media screen and (min-width: 501px){

.main-layout{
  display: grid;
  grid-template-columns: auto auto;
}
.rounds {
    float: left;
}

.btn:hover{
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

}

}
</style>
