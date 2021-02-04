<template>
  <div id="app">
    <v-content class="px-12 py-3" app>
      <v-container fluid>
        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/login">Login</router-link>
        </div>
        <router-view/>
      </v-container>
    </v-content>
  </div>
</template>
