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
    display: grid;
    align-content: center;
    justify-content: space-evenly;
    grid-template-columns: 60px 60px 60px 60px 60px;
    grid-gap: 10px;
    padding:10px;
    grid-area: f;
}

.field > div{
    background-color: chartreuse;
    text-align: center; 
    font-size: 30px;
    font-weight: bolder;
    color: black;
    padding: 5px 0;
    border-radius: 10px;
}
/* Dice */
.field > div:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.field div:nth-child(1) {
    background-color: green;
}
.field div:nth-child(2) {
    background-color: gold;
}
.field div:nth-child(3) {
    background-color: blue;
}
.field div:nth-child(4) {
    background-color: deeppink;
}
.field div:nth-child(5) {
    background-color:lime;
} 

</style>
