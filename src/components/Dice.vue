<template>
<div>
    <div class="field">
        <div v-for="die in allDice" 
        :key="die.id"  
        class="dice-pos"
        >
        {{ die.value }}
    </div>
    </div>

</div>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Dice",
    computed: {...mapGetters(['allDice'])}

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
