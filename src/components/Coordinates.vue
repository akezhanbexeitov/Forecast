<script setup>
    import { useWeatherInfo } from '../stores/weatherInfo';

    const weatherInfo = useWeatherInfo()
</script>

<template>
    <section v-if="weatherInfo?.weather" class="coordinates">
        <div class="compass">
            <img class="compass-image" src="/src/assets/img/compass.png" alt="Compass">
        </div>

        <div class="text-box">
            <div class="longtitude">
                <p class="heading">
                    Longitude: {{ weatherInfo?.weather?.coord?.lon }}
                </p>
                <p class="description">
                    Longitude measures distance east or west of the prime meridian.
                </p>
            </div>

            <div class="latitude">
                <p class="heading">
                    Latitude: {{ weatherInfo?.weather?.coord?.lat }}
                </p>
                <p class="description">
                    Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the equator.
                </p>
            </div>
        </div>

    </section>
</template>

<style scoped>
    .coordinates {
        width: 600px;
        height: 250px;
        padding: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
        background: url('/src/assets/img/gradient-1.jpg') no-repeat 0% 0%;
        background-size: cover;
        border-radius: 5%;
    }
    .compass {
        width: 20%;
    }

    .compass-image {
        width: 100%;
    }

    .text-box {
        width: 80%;
    }

    .longtitude {
        margin-bottom: 20px;
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
