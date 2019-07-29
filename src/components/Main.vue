<template>
    <div>
    <h1>YATZY</h1>
    <button class="btn btn1">Regler</button>
</div>
</template>

<script>
export default {
    name: "Main"
};
</script>

<style scoped>
.btn {
    background-color: blue; 
    border: none;
    color: white;
    padding: 10px 20px;
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
</style>
