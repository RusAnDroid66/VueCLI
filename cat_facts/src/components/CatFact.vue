<template>
    <div class="container">
        <h1>Случайный факт о кошках:</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'CatFact'
    }
</script>

<style scoped>
    .container {
        width: 764px;
        margin: auto;
        box-shadow: 0 0 15px 0 #5f5f5f73;
        padding: 50px;
    }
    h1 {
        margin: 0;
        margin-bottom: 25px;
    }
</style>
