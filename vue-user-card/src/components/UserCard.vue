<template>
    <div id="app">
        <div class="user-card">
            <img :src="get_img_url" class="user-photo">
            <p class="user-nickname">{{ username }}</p>
            <p class="user-name">
                {{ get_last_name }} {{ get_first_name }} <br> {{ get_patronymic }}
            </p>
            <hr>
            <p class="user-info-item">
                <img src="../assets/img/location.png">
                {{ adress }}
            </p>
            <p class="user-info-item">
                <img src="../assets/img/mail.png">
                {{ email }}
            </p>
            <p class="user-info-item">
                <img src="../assets/img/phone.png">
                {{ phone }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserCardComponent',
        props: ["img_url", "username", "full_name", "adress", "email", "phone"],
        computed: {
            get_first_name() {
                return this.full_name.split(" ")[1];
            },

            get_last_name() {
                return this.full_name.split(" ")[0];
            },

            get_patronymic() {
                return this.full_name.split(" ")[2];
            },
            
            get_img_url() {
                return this.img_url;
            }
        }   
    }
</script>

<style>
    .user-card {
        width: 300px;
        padding: 20px;
        border-radius: 10px;
        margin-top: 100px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
        box-shadow: 0 0 15px 0 rgba(50, 50, 50, 0.2);
        text-align: center;
    }

    .user-card .user-photo {
        box-sizing: border-box;
        height: 150px;
        margin-top: -100px;
        border-radius: 50%;
        border: 3px solid #ccc;
    }

    .user-card .user-name {
        font-size: 30px;
        font-weight: 900;
        line-height: 1.4;
        margin: 5px 0;
    }

    .user-card .user-nickname {
        color: #a0a9b3;
        font-size: 18px;
        margin: 5px 0;
        font-family: monospace;
    }

    .user-card hr {
        height: 4px;
        width: 50px;
        margin: 10px auto;
        background-color: #2c3e50;
    }

    .user-card .user-info-item img {
        vertical-align: middle;
        margin-right: 5px;
    }
</style>
