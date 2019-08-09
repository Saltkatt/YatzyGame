<template>
    <div class="modal-box" v-if="this.getRounds == 15">
    <div class="modal-content">
        <div class="player-score">
            <h1>Bravo!</h1>
            <h1>Du har klarat omgången!</h1>
            <h2>Dina poäng: {{score}}</h2>
        </div>
        <div>
            <h2>Vill du spela igen?</h2>
            <button class="btn playAgain" @click="onBtnClick()">Spela Igen!</button>
        </div>
    </div>
  
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Score",
    methods: {
        onBtnClick(){
            this.replay();

        },
        replay: function() {
            this.$store.dispatch('replay');
        },

        

    },
    computed: {...mapGetters([
    'getRounds',
    'getPTwo',
    ]),

        score: function() {
            return this.getPTwo[9].value;
        }
    }

}
</script>

<style>

/* The Modal (background) */
.modal-box {
  height: 100%;
  position: fixed;
  top: 0;
  margin-left: 5%;
  border: 1px solid black;
  background-color: gold;
}
/* Modal content */
.modal-content {
  text-align: center;
  background-size: contain;
  padding: 20px 30px;
  color: black;
  font-size: 18px;
  margin: 5% auto;
  width: 60%;
  height: 75vh;
}
h1{
  margin: 0px;
}

.playAgain{
  border: 3px solid black;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  box-shadow: 0 9px rgba(0,0,0,0.8);
  margin: 10px;
}
.playAgain:hover{
  background-color: #4da0d1;
  cursor: pointer;
}
.playAgain:active{
  background-color: #4da0d1;
  box-shadow: 0 5px rgba(0,0,0,0.8);
  transform: translateY(4px);
}


/*Desktop*/
@media screen and (min-width: 501px){
  .modal-box{
    width: 90%;
  }
}
/*Mobile*/
@media screen and (max-width: 500px) {
  .modal-box{
    width: 90%;
    height: 70%;
    
  }
  .playAgain:hover{
  background-color: #4da0d1;
  cursor: pointer;
}
.playAgain:active{
  background-color: #4da0d1;
  box-shadow: 0 5px rgba(0,0,0,0.8);
  transform: translateY(4px);
}
}

</style>
