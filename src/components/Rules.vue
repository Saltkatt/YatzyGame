<template>
      <div class="modal-box" v-show="isRulesCLicked">
    <div>
      <div class="header">
          <button class="button-close" v-on:click="showRules">x</button>

      </div>
      <div class="modal-content">
          
        <h2>Hur spelar man?</h2>
        <p>1. Klicka på Slå Tärning knappen för att börja spela. Man kan bara slå tärningarna tre gånger per omgång.</p>
        <p>2. För att välja tärningar klicka på dem, de blir då röda och rullas inte när du klickar på Slå Tärning.</p>
        <p>3. De tärningar som du vill använda ska vara röda innan du trycker på Välj knappen.</p>
        <p>4. Efter du har tryckt på Välj klickar du på det område i protokollet som du vill att tärningarna ska hamna.</p>
        <p>5. Om tärningarna är godkända blir det protokollområdet grönt och poängen trillar in.</p>
        <p>6. Om tärningarna inte är godkända blir protokollområdet rosa, området stryks och poängen blir 0.</p>
        <p>7. Om du vill stryka ett område kan du låsa en tärning tryck Välj och klicka sedan på protokollområdet du vill stryka.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Rules",
    methods: {
        showRules() {
            this.$store.commit("showRules");
        },

        

    },
    computed: {...mapGetters([
    'getShowRules',
    ]),
       isRulesCLicked: function(){
            return this.getShowRules;
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
  background-color:palegoldenrod;
  overflow-y: auto;
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

.button-close{
    background-color: gold;
    margin-left:5%;
    float: left;
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
 

}

</style>
