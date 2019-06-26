<template>
<div>
    <div class="protocol-area">
        <div class="p-a-one">
            <div class="item 1">Ettor</div>
            <div class="item p1">point</div>
            <div class="item 2">Tvåor</div>
            <div class="item p2">point</div>
            <div class="item 3">Treor</div>
            <div class="item p3">point</div>
            <div class="item 4">Fyror</div>
            <div class="item p4">point</div>
            <div class="item 5">Femor</div>
            <div class="item p5">point</div>
            <div class="item 6">Sexor</div>
            <div class="item p6">point</div>
            <div class="item 7">Summa</div>
            <div class="item r1">sum</div>
            <div class="item 8">Bonus</div>
            <div class="item r2">50</div>
        </div>
       
    </div>
        

</div>
    
</template>

<script>
export default {

}
</script>

<style scoped>

.protocol-area{
    width: 50%;
    background-color: ivory;
}

/* Protocol Area One */
.p-a-one{
    display: grid;
    grid-template-columns: 80px 120px;
}
.p-a-one div{
    background-color: bisque;
    border: 2px solid black;
    border-radius: 5px;
    padding: 4px;
    margin: 0;
    height: 25px;
    font-size: 10pt;
    font-weight: bold;
    cursor: pointer;
}







/* Mobile */
@media screen and (max-width: 500px) {
    
    
}

</style>
