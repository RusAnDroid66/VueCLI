<template>
  <div id="app">
    <WeatherInformerComponent :temperatureReal="temperatureReal" :temperatureFeel="temperatureFeel" :humidity="humidity" :wind="wind"></WeatherInformerComponent>
  </div>
</template>

<script>
import WeatherInformerComponent from "./components/WeatherInformer.vue"

export default {
  name: 'App',
  components: {
    WeatherInformerComponent
  },
  data(){
    return {
      temperatureReal: 1,
      temperatureFeel: '-3.2',
      humidity: 6,
      wind: 20
    }
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
