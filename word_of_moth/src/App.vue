<template>
  <v-app>
    <v-app-bar
      color="deep-purple" 
      app 
      shrink-on-scroll 
      dark 
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="(article, id) in news_array"
            :key="id"
            :cols="cols_number"
          >
            <Article :article="article">
            </Article>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Article from "./components/Article.vue";
  export default {
    name: 'App',

    components: {
      Article
    },

    data: () => ({
      news_array: [],
      cols_number: "4"
    }),

    methods: {
      renew_news() {
        this.axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d7f41a32c26b4bbfb596d58b1a54c766")
          .then((response) => {
            this.news_array = response.data.articles;
            console.log(response.data);
          }
        );
      }
    },

    computed: {
      rows_number() {
        return this.news_array.length;
      }
    },

    mounted() {
      this.renew_news();
    }
  };

</script>
