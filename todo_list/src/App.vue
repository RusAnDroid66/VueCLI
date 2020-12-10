<template>
  <div id="app">
    <TodoList v-bind:todos="todos" v-on:delete-todo="delete_todo"></TodoList>
  </div>
</template>

<script>

import  TodoList from "./components/TodoList.vue"

export default {
  name: 'App',
  components: {
    TodoList
  },
  data() {
    return {
      todos: ["Install Linux", "Pet the cat", "Feed the cat", "Do the project"]
    }
  },
  methods: {
    delete_todo(index) {
      this.todos.splice(index, 1);
    }
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
</style>
