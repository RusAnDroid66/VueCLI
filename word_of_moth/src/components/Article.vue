<template>
  <v-card height="200">
  </v-card>
</template>

<script>

  export default {
    name: 'Article',
    props: [
        "article"
    ],
    data() {
        return {
            text = article.content,
        }
    }
  };

</script>
