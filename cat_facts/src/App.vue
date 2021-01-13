<template>
  <div id="app">
    <CatFact>
      {{ fact_text }}
    </CatFact>
  </div>
</template>

<script>
import CatFact from './components/CatFact.vue'

export default {
  name: 'App',
  components: {
    CatFact
  },

  data() {
    return {
      fact_text: "",
    }
  },

  methods: {
    get_fact() {
      this.axios.get("http://37.77.104.246/api/random-fact.php")
        .then((response) => {
          this.fact_text = response.data;  
        }
      );
    }
  },

  mounted() {
    this.get_fact()
    setInterval(() => this.get_fact(), 10000);
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
