<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mx-12 pa-12">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
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
                                let user = {
                                    name: this.login,
                                    password: this.password
                                }
                                this.$emit("login", user);
                                window.alert("Logged in successfully");
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            window.alert("Wrong login or password");
                        }
                    }
                ).catch((error) => {
                    window.alert("Something went wrong, try again later");
                });
        }
    }
  }
</script>