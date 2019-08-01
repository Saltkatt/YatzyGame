<template>
<div>
    <div class="protocol-area">
        <div class="protocol-one">
            <div class="grid-item 0"  @click="check(1)">Ettor: {{getCheckValue}} </div>
            <div class="grid-item 1" >Tvåor:  </div>
            <div class="grid-item 2" >Treor:  </div>
            <div class="grid-item 3" >Fyror:  </div>
            <div class="grid-item 4" >Femor:  </div>
            <div class="grid-item 5" >Sexor:  </div>
            <div class="grid-item 6" >Summa: </div>
            <div class="grid-item 7" >Bonus: </div>
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
        
        //This function is used to check ones to sixes
        check: function(x) {
        this.$store.dispatch('check', x); 
    }

    },
    computed: {...mapGetters(['allDice', 'getRounds', 'getCheckValue', 'getSavedDice'])}


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
}
/* Protocol Area Two*/
.protocol-two {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: black; 
    padding: 10px;
    grid-area: rec;
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

/* Mobile */

@media screen and (max-width: 500px) {
    .protocol-area{
        width: 100%;
    }
    
}



</style>



