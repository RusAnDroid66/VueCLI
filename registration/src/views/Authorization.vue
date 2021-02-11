<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mx-12 pa-12">
            <v-card-title>
                Регистрация:
            </v-card-title>

            <v-text-field
                label="Придумайте логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Придумайте пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn v-on:click="register()">
                Зарегистрироваться
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
        register() {
            this.axios.get("http://37.77.104.246/api/jsonstorage/?id=dd44fa1f9717500f356ecc3f657a9706")
                .then(
                    (response) => {
                        let obj = {
                            "login": this.login,
                            "password": this.password
                        }
                        response.data.push(obj);
                        this.axios.put('http://37.77.104.246/api/jsonstorage/?id=dd44fa1f9717500f356ecc3f657a9706', response.data)
                            .then((response) => {
                                let user = {
                                    name: this.login,
                                    password: this.password
                                }
                                this.$emit("login", user);
                                window.alert("Registered successfully");
                            }).catch((error) => {
                                window.alert("Something went wrong, try again later.");
                            });
                    }
                ).catch((error) => {
                    window.alert("Something went wrong, try again later");
                })
        }
    }
  }
</script>