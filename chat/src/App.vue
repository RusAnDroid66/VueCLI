<template>
  <div id="app">
    <Container>
      <ChatWindow v-on:send_message="send_message">
        <ChatMessage v-for="message in messages_array" :key="message.id" :username="message.author" :datetime="message.datetime">
          {{ message.text }}
        </ChatMessage>
      </ChatWindow>
    </Container>
  </div>
</template>

<script>
  import ChatMessage from './components/ChatMessage.vue'
  import Container from './components/Container.vue'
  import ChatWindow from './components/ChatWindow.vue'

  export default {
    name: 'App',
    components: {
      Container,  ChatMessage, ChatWindow
    },

    data() {
      return {
        messages_array: []
      }
    },
    
    methods: {
      get_messages() {
        this.axios.get("http://37.77.104.246/api/chat/getmessages.php")
          .then((response) => {
            this.messages_array = response.data;
        });
      },

      send_message(message) {
        this.axios({
          method: "post",
          url: "http://37.77.104.246/api/chat/sendmessage.php",
          data: {
            author: message.username,
            text: message.text
          }
        }).then((response) => {
          console.log(response);
          this.get_messages();
        });
      }
    },

    mounted() {
      setInterval(() => this.get_messages(), 1000);
    }
  }
</script>

<style>
  body {
    margin: 0;
    background-color: #f9f9fa;
  }
</style>
