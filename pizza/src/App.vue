<template>
  <div id="app">
   <h1>Parent: {{pizzaName}}</h1>
   <app-pizza :pizzaName='pizzaName' :pizzaPrice='pizzaPrice' :imgURL='imgURL'>
     <div slot="components" class="components_list">
        <h2>Состав:</h2>
        <ul>
          <li>пицца</li>
          <li>баги</li>
          <li>костыли</li>
          <li>любовь</li>
        </ul>
     </div>
   </app-pizza>
  </div>
</template>

<script>
  import Pizza from './components/Pizza.vue'

  export default {
    name: 'app',
    data(){
      return {
        pizzaName: 'Пицца от школы программистов',
        pizzaPrice: 600,
        imgURL: "https://w-dog.ru/wallpapers/5/5/473285374806349/eda-vkusno-picca-produkty-pitaniya-krasnyj-fon.jpg"
      }
    },
    components: {
      appPizza: Pizza
    } 
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .components_list {
    width: fit-content;
    margin: auto;
    text-align: left;
  }
</style>

