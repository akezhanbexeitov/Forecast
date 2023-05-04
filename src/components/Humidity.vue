<script setup>
    import { useWeatherInfo } from '../stores/weatherInfo';

    const weatherInfo = useWeatherInfo()
</script>

<template>
    <section class="humidity">
        <div class="water-drops">
            <img class="image" src="/src/assets/img/humidity.png" alt="Compass">
        </div>

        <div class="text-box">
            <p class="heading">
                Humidity: {{ weatherInfo?.weather?.main?.humidity }} %
            </p>
            <p class="description">
                Humidity is the concentration of water vapor present in the air. 
                Water vapor, the gaseous state of water, is generally invisible to the human eye.
                The same amount of water vapor results in higher relative humidity in cool air than warm air.
            </p>
        </div>
    </section>
</template>

<style scoped>
    .humidity {
        width: 70%;
        padding: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
        background: url('/src/assets/img/gradient-1.jpg') no-repeat 0% 0%;
        background-size: cover;
        border-radius: 16px;
    }

    .water-drops {
        width: 20%;
    }

    .water-drops .image {
        width: 100%;
    }

    .text-box {
        width: 80%;
    }

    .heading {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .description {
        color: lightgrey;
        font-size: 14px;
        line-height: 1.4;
    }
</style>
