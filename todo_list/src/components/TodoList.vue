<template>
    <ul>
        <li v-for="(todo, index) in todos" v-on:click="delete_todo(index)" v-bind:key="index">{{ todo }}</li>
    </ul>
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

</style>