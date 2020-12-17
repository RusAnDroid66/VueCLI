<template>
  <div id="app">
    <user-card-component :full_name="name" :username="username" :img_url="img_url" :email="email" :phone="phone"></user-card-component>
  </div>
</template>

<script>
  import UserCardComponent from './components/UserCard.vue'

  export default {
    name: 'App',
    components: {
      UserCardComponent
    }, 
    data() {
      return {
        name: "Иванов Иван Иванович",
        username: "romashka",
        img_url: "img/70.jpg",
        email: "coldrabbit48@example.com",
        phone: "+7-495-266-57-34"
      }
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
</style>
