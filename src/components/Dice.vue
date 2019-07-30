<template>
<div>
    <div class="field">
        <div v-for="die in allDice" 
        :key="die.id" 
        @click="locked(die.id)" 
        class="dice-pos"
        v-bind:class="{locked: die.isLocked}">
        {{ die.value }}
    </div>
    </div>

     <button class="btn rollDiceButton" 
     @click="onBtnClick" 
     v-bind:disabled="counter === 3"
      >Slå Tärning</button>

</div>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Dice",
    methods: {

        onBtnClick() {
            this.$store.commit('increaseCounter')
            this.randomDice()

        },

         //Rolls random dice
        randomDice(){
            //Iterates through dice array and chacks if dice are locked true/false.
            this.allDice.forEach((element, index) => {
               if(element.isLocked == false) {
                 this.$store.commit('rollDice', index);  
               }
               
            });
        },

        locked(id){
            this.$store.commit('changeLock', id ) 
        },


    },
    computed: {...mapGetters([
    'allDice',
    'counter',
    
    
    ])}

}


</script>

<style scoped>

/* Playing field */
.field{
    justify-content: space-evenly;
    align-items: center;
    padding:10px;
}

.field > div{
    text-align: center; 
    font-size: 30px;
    font-weight: bolder;
    color: black;
    margin: 10px;
    width: 50px;
    line-height: 40px;
    padding: 5px 0;
    border-radius: 10px;
    border: 1px solid black;

}
/* Dice */
.field > div:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.field div:nth-child(1) {
    background-color: green;
    cursor: pointer;
}
.field div:nth-child(2) {
    background-color: gold;
    cursor: pointer;
}
.field div:nth-child(3) {
    background-color: blue;
    cursor: pointer;
}
.field div:nth-child(4) {
    background-color: deeppink;
    cursor: pointer;
}
.field div:nth-child(5) {
    background-color:lime;
    cursor: pointer;
} 

div > div.field > div.locked {
    background-color: red;
    border: solid 2px black;
}

/* Button*/

.rollDiceButton{
    background-color: coral;
    border-radius: 5px;
}

/* Desktop */
@media screen and (min-width: 501px) {
  .field{
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    padding:10px;
}

    
}

/* Small Screen */ 
@media screen and (max-width: 500px) {
    .field{
        display: flex;
        flex-flow: row wrap;
    }

    .field > div:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
    
}

</style>
