<template>
    <div class="informer-container">
        <TemperatureComponent></TemperatureComponent>
        <div class="flex-break"></div>
        <HumidityComponent></HumidityComponent>
        <div class="vertical-divider"></div>
        <WindComponent></WindComponent>
    </div>
</template>

<style>
    .informer-container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 400px;
        min-height: 255px;
        padding: 30px;
        background-image: url('../assets/forest.jpg');
        background-size: cover;
        background-position: center center;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.75);
    }

    .flex-break{
        flex-basis: 100%;
        height: 0;
    }

    .vertical-divider{
        height: 70px;
        width: 1px;
        background-color: #fff;
        vertical-align: middle;
        display: table-cell;
    }
</style>

<script>
    import TemperatureComponent from "../components/Temperature.vue"
    import HumidityComponent from "../components/Humidity.vue"
    import WindComponent from "../components/Wind.vue"

    export default {
        name: 'WeatherInformerComponent',
        components: {
            TemperatureComponent,
            HumidityComponent,
            WindComponent
        },
        data() {
            return {}
        }
    }
</script>