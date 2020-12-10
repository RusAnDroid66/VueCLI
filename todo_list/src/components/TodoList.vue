<template>
    <div class="container">
        <ul>
            <li v-for="(todo, index) in todos" v-on:click="delete_todo(index)" v-bind:key="index">{{ todo }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TodoList",
    props: [
        "todos"
    ],
    methods: {
        delete_todo(index) {
            this.$emit("delete-todo", index);
        }
    }
}
</script>

<style>
    .container {
        display: flex;
        align-items: center;
        height: 90vh;
        width: 100%;
    }
    ul {
        margin: auto;
        font-size: 20pt;
    }
</style>