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

    <button class="btn chooseDice"
    @click="onChooseBtnClick"
    v-bind:disabled="btnCounter === 1"
    v-bind:class="{changeBtnColor:btnCounter === 1}"
    
    > Välj </button>

   

</div>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Dice",
    methods: {

        onBtnClick() {
            // Calls on increaseCounter in storage
            this.$store.commit('increaseCounter')
            this.randomDice()
        },

        onChooseBtnClick(){
            this.$store.commit('increaseBtnCounter')
            this.saveDice() 
        },

        /*
        Iterates through dice array and checks if dice are locked true/false.
        If the dice are not locked they can be rolled and are sent to rollDice in storage.
        */ 
        randomDice(){
            this.allDice.forEach((element, index) => {
               if(element.isLocked == false) {
                 this.$store.commit('rollDice', index);
               }
            });
        },

        /* Sends dice id to changeLock in storage to change isLocked to true/false. */
        locked(id){
            this.$store.commit('changeLock', id ) 
        },
       
        /* 
        Iterates through the dice array to check for locked dice.
        Sends the locked dice to the savedDice array in storage. 
        */
        saveDice(){
            var sD = this.allDice
            for(var i = 0; i < sD.length; i++) {
                if (sD[i].isLocked == true) {
                    var payload = sD[i];
                    this.$store.commit('addToSavedDice', payload)
                }
                else{
                    continue
                }
            }
        },

    },
    computed: {...mapGetters([
    'allDice',
    'counter',
    'btnCounter',
    
    
    
    ])}

}


</script>

<style scoped>

/* Playing field */
.field{
    background-color: lightblue;
    justify-content: center;
    align-items: center;
    padding:10px;
    border-radius: 15px;
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
    background-color: ivory;
    cursor: pointer;
}
.field div:nth-child(2) {
    background-color: ivory;
    cursor: pointer;
}
.field div:nth-child(3) {
    background-color: ivory;
    cursor: pointer;
}
.field div:nth-child(4) {
    background-color: ivory;
    cursor: pointer;
}
.field div:nth-child(5) {
    background-color:ivory;
    cursor: pointer;
} 

div > div.field > div.locked {
    background-color: red;
    border: solid 2px black;
}

div > div.field > div.chosen{
    background-color: greenyellow;
    border: solid 2px black;
}

/* Button*/
.btn {
    margin-top: 5px;
    background-color:yellowgreen;
    border-radius: 5px;
    cursor:pointer;
    height: 50px;
    width: 100px;
    font-weight: bold;
}
.chooseDice{
    margin-left: 15px;
   
}
.changeBtnColor{
    background-color: red;
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
        width: 80%;
        margin-left: 5%;
    }

    .field > div:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
    
}

</style>
