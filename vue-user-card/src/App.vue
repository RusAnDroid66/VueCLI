<template>
  <div id="app">
    <user-card-component :full_name="name" :username="username" :img_url="img_url" :email="email" :phone="phone" :adress="adress"></user-card-component>
    <button v-on:click="getUserData()" class="renew_button">Обновить</button>
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
        name: "",
        username: "",
        img_url: "",
        email: "",
        phone: "",
        adress: ""
      }
    },
    methods: {
      getUserData() {
        this.axios
          .get('http://37.77.104.246/users/getrandom.php')
          .then(response => {
            let name_array = [response.data.firstName, response.data.lastName]
            this.name = name_array.join(' ');
            this.img_url = response.data.img;
            this.email = response.data.email;
            this.phone = response.data.cellPhone;
            let adress_array = [response.data.country, response.data.city, response.data.street]
            this.adress = adress_array.join(', ');
            this.adress += ' ' + response.data.houseNumber;
          })
      }
    },
    mounted() {
      this.getUserData();
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  .renew_button {
    margin: 10px;
    padding: 15px;
    background-color: #56418a;
    color: white;
    border: 1px solid white;
    outline: none;
    border-radius: 10px;
  }

  .renew_button:hover {
    background-color: #6a529c;
  }

  .renew_button:active {
    background-color: #2b174d;
  }
</style>
