<template>
    <div class="container">
         <header>
        <!-- Navigation Bar -->
            <nav class="nav-bar">
                <ul>
                    <button class="btn rulesButton" @click="showRules()">?</button>
                </ul>

            </nav>
    </header>
       
        <div class="main-layout">
        <Protocol></Protocol>
        <Dice></Dice>
        </div>

    </div>
</template>

<script>
import Protocol from '../components/Protocol.vue'
import Dice from '../components/Dice.vue'
export default {
    name: "Main",
    components: {
        Protocol,
        Dice
    }

};
</script>

<style scoped>



.btn {
    background-color:coral; 
    border: none;
    border-radius: 20px;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 60px;
}

.btn:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

}

/* Desktop */
@media screen and (min-width: 501px){
  .main-layout{
  display: grid;
  grid-template-columns: auto auto;
}

}
</style>
