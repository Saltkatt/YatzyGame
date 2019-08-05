<template>
<div>
    <div class="protocol-area">
        <div class="protocol-one">
            <div class="grid-item 0"  @click="onProtocolClick(1)" v-bind:class="{chosen:getProtocolOne[0].isChosen}" >Ettor: {{getOnes}} </div>
            <div class="grid-item 1"  @click="onProtocolClick(2)">Tvåor: {{getTwos}}  </div>
            <div class="grid-item 2"  @click="onProtocolClick(3)">Treor: {{getThrees}} </div>
            <div class="grid-item 3"  @click="onProtocolClick(4)">Fyror: {{getFours}} </div>
            <div class="grid-item 4"  @click="onProtocolClick(5)">Femor: {{getFives}} </div>
            <div class="grid-item 5"  @click="onProtocolClick(6)">Sexor: {{getSixes}} </div>
            <div class="grid-item 6" >Summa: {{getSumPOne}} </div>
            <div class="grid-item 7" >Bonus: {{getBonus}} </div>
        </div>
        <div class="protocol-two">
            <div class="grid-item 8" >Ett par:  </div>
            <div class="grid-item 9" >Två par: </div>
            <div class="grid-item 10" >Tretal:  </div>
            <div class="grid-item 11" >Fyrtal:  </div>
            <div class="grid-item 12" >Liten Stege: </div>
            <div class="grid-item 13" >Stor Stege: </div>
            <div class="grid-item 14" >Kåk: </div>
            <div class="grid-item 15" >Chans: </div>
            <div class="grid-item 16" >YATZY:  </div>
            <div class="grid-item 17" >Totalt: </div>

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
            this.chooseValue();
            this.lock(x)
        },
        
        //This function is used to check ones to sixes
        check: function(x) {
            this.$store.dispatch('check', x); 
        },

        unLock(){
            this.$store.commit('resetIsLocked');
        },

        resetDiceValue(){
            this.$store.commit('resetDiceValue');
        },

          //Changes colour of grid element to lightgreen
        chooseValue(){
            // var id = x - 1;
            this.getProtocolOne.forEach((element, id) => {
                
                if(element.isChosen == true){
                    this.$store.commit('selectOne', id)
                }
            });
        },

        lock(x){
            var id = x - 1;
            this.$store.commit('chooseOne', id ) 
        },

    },
    computed: {...mapGetters([
        'allDice', 
        'getProtocolOne',
        'getProtocolTwo',
        'getRounds', 
        'getCheckValue', 
        'getSavedDice', 
        'getOnes',
        'getTwos',
        'getThrees',
        'getFours',
        'getFives',
        'getSixes',
        'getSumPOne',
        'getBonus',
        
        ])}


}
</script>

<style scoped> 

.protocol-area{
    /* background-color: ivory; */
    justify-content: center;
    
    
}


/* Desktop */
@media screen and(min-width: 501px){
    .protocol-area{
        width: 80%;
    }
    
}

/* Protocol Area One */
.protocol-one {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: black; 
    padding: 10px;
    grid-area: rec;
    cursor:pointer;
}
/* Protocol Area Two*/
.protocol-two {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: black; 
    padding: 10px;
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

/* Mobile */

@media screen and (max-width: 500px) {
    .protocol-area{
        width: 100%;
    }

    .protocol-one > div.chosen{
     background-color:lightgreen;
     pointer-events: none;
}
    
}



</style>



