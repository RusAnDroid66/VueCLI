<template>
  <div id="app">
    <WeatherInformerComponent></WeatherInformerComponent>
  </div>
</template>

<script>
import WeatherInformerComponent from "./components/WeatherInformer.vue"

export default {
  name: 'App',
  components: {
    WeatherInformerComponent
  }
}
</script>

<style>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: rgb(244, 123, 186);
    background: linear-gradient(-25deg, rgba(244, 123, 186, 0.5) 20%, rgba(90, 95, 245, 0.5) 80%);
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
