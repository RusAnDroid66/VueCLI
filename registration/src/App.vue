<template>
  <div id="app">
    <v-content class="px-12 py-3" app>
      <v-container fluid>
        <div>
          <router-link v-if="user == undefined" to="/login">Login</router-link>
          <router-link v-else :to=" `/user/${user.name}` ">{{ user.name }}</router-link> |
          <router-link to="/registration">Registration</router-link> |
          <router-link to="/">Home</router-link>
        </div>
        <router-view v-on:login="set_user_object" :user="user" />
      </v-container>
    </v-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: undefined
      }
    },
    methods: {
      set_user_object(data) {
        this.user = data;
        console.log("registered");
        console.log(this.user);
      }
    }
  }
</script>
