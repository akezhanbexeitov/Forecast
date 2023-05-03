<script setup>
    import { useWeatherInfo } from '../stores/weatherInfo';
    import { capitalizeFirstLetter } from '../utils/index'

    const weatherInfo = useWeatherInfo()
    const today = new Date().toLocaleString('en-EN', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })
</script>

<template>
    <section v-if="weatherInfo?.weather" class="weather-summary">
        <div class="image">
            <img :src="`/src/assets/img/weather-main/${weatherInfo?.weather?.weather[0]?.description}.png`" :alt="weatherInfo?.weather?.weather[0]?.description">
        </div>
        
        <p class="temperature">
            {{ Math.round(weatherInfo?.weather?.main?.temp) }} °C
        </p>
        
        <div class="description">
            <div class="text">
                <span class="icon"></span>
                <p>
                    {{ capitalizeFirstLetter(weatherInfo?.weather?.weather[0]?.description) }}
                </p>
            </div>

            <!-- TODO add different icon -->
            <div class="text">
                <span class="icon"></span>
                <p class="text">
                    {{ weatherInfo?.weather?.name }},
                    {{ weatherInfo?.weather?.sys?.country }}
                </p>
            </div>

            <!-- TODO add different icon -->
            <div class="text">
                <span class="icon"></span>
                <p class="text">
                    {{ today }}
                </p>
            </div>
        </div>

    </section>
</template>

<style scoped>
    .weather-summary {
        width: 30%;
        background: url('/src/assets/img/gradient-1.jpg') no-repeat 0% 0%;
        background-size: cover;
        padding: 15px;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .image,
    .temperature {
        margin-bottom: 15px;
    }

    .image {
        width: 100px;
        height: 100px;
    }

    .image img {
        width: 100%;
    }

    .temperature {
        font-size: 28px;
        text-align: center;
    }

    .text {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .text:not(:last-child) {
        margin-bottom: 10px;
    }

    .icon {
        position: relative;
        width: 20px;
        height: 20px;
    }

    .icon::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
        background-image: url('/src/assets/img/weather.svg')
    }
</style>
