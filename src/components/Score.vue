<template>
    <div class="modalBox" v-if="this.getRounds == 15">
    <div class="modalContent">
        <div class="player-score">
            <h1>Bravo! Du har klarat omgången!</h1>
            <h2>Det här är dina poäng: {{score}}</h2>
        </div>
        <div>
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
        }

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

/* Button*/
.btn {
    background-color: indigo;
    border-radius: 5px;
}

/*Desktop*/
@media screen and (min-width: 501px){
  .modalBox{
    width: 200px;
  }
}
/*Mobile*/
@media screen and (max-width: 500px) {
  .modalBox{
    width: 200px;
    height: 400px;
  }
}

</style>
