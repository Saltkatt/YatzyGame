<template>
<div>
    <div class="protocol-area">
        <div class="rounds">Rounds: {{getRounds}}</div>
        <div class="protocol-one">
            <div class="grid-item 0"  @click="onProtocolClick(1)" v-bind:class="{chosen:getPOne[0].isChosen, pass:getPOne[0].pass}" >Ettor: {{getOnes}} </div>
            <div class="grid-item 1"  @click="onProtocolClick(2)" v-bind:class="{chosen:getPOne[1].isChosen, pass:getPOne[1].pass}">Tvåor: {{getTwos}}  </div>
            <div class="grid-item 2"  @click="onProtocolClick(3)" v-bind:class="{chosen:getPOne[2].isChosen, pass:getPOne[2].pass}">Treor: {{getThrees}} </div>
            <div class="grid-item 3"  @click="onProtocolClick(4)" v-bind:class="{chosen:getPOne[3].isChosen, pass:getPOne[3].pass}">Fyror: {{getFours}} </div>
            <div class="grid-item 4"  @click="onProtocolClick(5)" v-bind:class="{chosen:getPOne[4].isChosen, pass:getPOne[4].pass}">Femmor: {{getFives}} </div>
            <div class="grid-item 5"  @click="onProtocolClick(6)" v-bind:class="{chosen:getPOne[5].isChosen, pass:getPOne[5].pass}">Sexor: {{getSixes}} </div>
            <div class="grid-item 6" >Summa: {{getSumPOne}} </div>
            <div class="grid-item 7" >Bonus: {{getBonus}} </div>
        </div>
        <div class="protocol-two">
            <div class="grid-item 8" @click="onProtocolTwoClick(0)" v-bind:class="{chosen:getPTwo[0].isChosen, pass:getPTwo[0].pass}">Ett par: {{getPair}} </div>
            <div class="grid-item 9" @click="onProtocolTwoClick(1)" v-bind:class="{chosen:getPTwo[1].isChosen, pass:getPTwo[1].pass}">Två par: {{getTwoPair}} </div>
            <div class="grid-item 10" @click="onProtocolTwoClick(2)" v-bind:class="{chosen:getPTwo[2].isChosen, pass:getPTwo[2].pass}" >Tretal: {{getThreeOfAKind}} </div>
            <div class="grid-item 11" @click="onProtocolTwoClick(3)" v-bind:class="{chosen:getPTwo[3].isChosen, pass:getPTwo[3].pass}">Fyrtal: {{getFourOfAKind}} </div>
            <div class="grid-item 12" @click="onProtocolTwoClick(4)" v-bind:class="{chosen:getPTwo[4].isChosen, pass:getPTwo[4].pass}">Liten Stege: {{getSmallStraight}} </div>
            <div class="grid-item 13" @click="onProtocolTwoClick(5)" v-bind:class="{chosen:getPTwo[5].isChosen, pass:getPTwo[5].pass}">Stor Stege: {{getBigStraight}} </div>
            <div class="grid-item 14" @click="onProtocolTwoClick(6)" v-bind:class="{chosen:getPTwo[6].isChosen, pass:getPTwo[6].pass}">Kåk: {{getFullHouse}} </div>
            <div class="grid-item 15" @click="onProtocolTwoClick(7)" v-bind:class="{chosen:getPTwo[7].isChosen, pass:getPTwo[7].pass}">Chans: {{getChance}} </div>
            <div class="grid-item 16" @click="onProtocolTwoClick(8)" v-bind:class="{chosen:getPTwo[8].isChosen, pass:getPTwo[8].pass}">YATZY: {{getYatzy}} </div>
            <div class="grid-item 17" >Totalt: {{getTotal}} </div>

        </div>
        
    </div>
    
</div>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Protocol",
    methods: {

        onProtocolClick(x){
            this.check(x);
            this.unLock();
            this.resetDiceValue();
            this.lockProtocolOne(x)
            this.chooseValueInProtocolOne();
        },

        onProtocolTwoClick(x){
            this.checkProtocolTwo(x);
            this.resetDiceValue();
            this.unLock();
            this.lockProtocolTwo(x);
            this.chooseValueInProtocolTwo();
        },
        
        //This function is used to check ones to sixes
        check: function(x) {
            this.$store.dispatch('check', x); 
        },
        //This function sends x to a switch statement in storage.
        checkProtocolTwo: function(x) {
            this.$store.dispatch('checkProtocolTwo', x);
        },
        // Unlocks locked dice.
        unLock(){
            this.$store.commit('resetIsLocked');
        },
        // Resets dice values to zero.
        resetDiceValue(){
            this.$store.commit('resetDiceValue');
        },
        //Changes colour of grid element in protocol-one to lightgreen
        chooseValueInProtocolOne(){
            this.getPOne.forEach((element, id) => {
                if(element.isChosen == true){
                    this.$store.commit('selectOne', id);
                }
            });
        },
        //Changes colour of grid element in protocol-two to lightgreen
        chooseValueInProtocolTwo(){
             this.getPTwo.forEach((element, id) => {
                if(element.isChosen == true){
                    this.$store.commit('selectTwo', id);
                }
            });
        },

        lockProtocolOne(x){
            var id = x - 1;
            this.$store.commit('chooseOne', id ); 
            this.$store.dispatch('passProtocolOne', id );
        },

        lockProtocolTwo(x){
            var id = x;
            this.$store.commit('chooseTwo', id );
            this.$store.dispatch('passProtocolTwo', id );
        }
    },
    computed: {...mapGetters([
        'allDice', 'getPOne','getPTwo','getRounds', 'getCheckValue', 'getSavedDice', 
        'getOnes','getTwos','getThrees','getFours','getFives','getSixes','getSumPOne','getBonus',
        'getPair','getTwoPair','getThreeOfAKind','getFourOfAKind','getFullHouse','getSmallStraight','getBigStraight',
        'getYatzy','getChance', 'getTotal', 'getHousePair', 'getHouseThreeOfAKind'
        
        ])}


}
</script>

<style scoped> 

.protocol-area{
    /* background-color: ivory; */
    justify-content: center;
}
.rounds{
    font-weight: bold;
}

/* Desktop */
@media screen and(min-width: 501px){
    .protocol-area{
        width: 80%;
        position: fixed;
    }
    
}

/* Protocol Area One */
.protocol-one {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: black; 
    padding: 5px;
    grid-area: rec;
    cursor:pointer;
    
}
/* Protocol Area Two*/
.protocol-two {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: black; 
    padding: 5px;
    grid-area: rec;
    cursor:pointer;
}

 /* Individual grid items inside the record grid */
.grid-item{
    background-color:white;
    border: 1px solid black;
    padding: 5px;
    text-align: left;
    font-size: 16px;
}


.btn {
    background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.btn1:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.btn1:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.protocol-one > div.chosen{
     background-color:lightgreen;
     pointer-events: none;
}

.protocol-two > div.chosen{
     background-color:lightgreen;
     pointer-events: none;
}


.protocol-one > div.pass{
     background-color:lightpink;
     pointer-events: none;
}

.protocol-two > div.pass{
     background-color:lightpink;
     pointer-events: none;
}
    

/* Mobile */

@media screen and (max-width: 500px) {
    .protocol-area{
        width: 100%;
    }

    .protocol-one > div.chosen{
     background-color:lightgreen;
     pointer-events: none;
    }

    .protocol-two > div.chosen{
     background-color:lightgreen;
     pointer-events: none;
    }

    .protocol-one > div.pass{
     background-color:lightpink;
     pointer-events: none;
    }

    .protocol-two > div.pass{
     background-color:lightpink;
     pointer-events: none;
    }
    
}



</style>



