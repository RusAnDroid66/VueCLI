<template>
    <div>
        <h2> Pizza Name: {{pizzaName}}</h2>
        <p>Price: {{pizzaPrice}}</p>    
        <div class="pizza_img" :style="{backgroundImage: 'url(' + imgURL + ')'}"></div>

        <div>
            <slot name="components"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pizzaName','pizzaPrice', 'imgURL'],    
    }
</script>

<style>
    .pizza_img {
        width: 400px;
        height: 300px;
        margin: auto;
        background-size: cover;
    }
</style>
