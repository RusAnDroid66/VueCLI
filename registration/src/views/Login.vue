<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
            ></v-text-field>

            <v-btn v-on:click="authenticate()">
                Войти
            </v-btn>
        </v-card>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        login: undefined,
        password: undefined
      }
    },
    methods: {
        authenticate() {
            this.axios.get("http://37.77.104.246/api/jsonstorage/?id=dd44fa1f9717500f356ecc3f657a9706")
                .then(
                    (response) => {
                        let users_arr = response.data;
                        let found = false;
                        for (let i in users_arr) {
                            if (this.login == users_arr[i].login && this.password == users_arr[i].password) {
                                this.$router.push('/users/' + this.id);
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            window.alert("Wrong login or password");
                        }
                    }
                )
        }
    }
  }
</script>