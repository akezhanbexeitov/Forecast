<script setup>
    import { onMounted, ref } from 'vue';
    import { API_KEY, BASE_URL } from './constants';
    import WeatherSummary from './components/WeatherSummary.vue';
    import { useWeatherInfo } from './stores/weatherInfo';
    import { RouterView, RouterLink } from 'vue-router'

    const city = ref('Paris')
    const weatherInfo = useWeatherInfo()

    const getWeather = () => {
        fetch(`${ BASE_URL }?q=${ city.value }&units=metric&appid=${ API_KEY }`)
            .then(res => res.json())
            .then(data => {
                weatherInfo.setWeatherInfo(data)
                city.value = null
            })
            .catch(error => console.log(error))
    }

    onMounted(() => getWeather())
</script>

<template>
    <div class="wrapper">
        <header class="header">
            <div class="search">
                <input 
                    type="text"
                    class="input"
                    v-model="city"
                    @keyup.enter="getWeather(city)"
                >
            </div>
            <nav class="navigation">
                <ul class="nav-list">
                    <li class="item">
                        <RouterLink to="/" class="link" href="#">Highlights</RouterLink>
                    </li>
                    <li class="item">
                        <RouterLink to="/coordinates" class="link" href="#">Coordinates</RouterLink>
                    </li>
                    <li class="item">
                        <RouterLink to="/humidity" class="link" href="#">Humidity</RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="main">
            <WeatherSummary />
            <RouterView />
        </main>
    </div>

</template>

<style lang="scss" scoped>
    @import './assets/styles/main';

    .wrapper {
        max-width: 970px;
        margin: 0 auto;
        height: 800px;
        padding: 20px 15px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }

    .navigation {
        width: 35%;
    }

    .nav-list {
        display: flex;
        justify-content: space-between;
    }

    .nav-list .item .link {
        text-decoration: none;
    }
    
    .search {
        position: relative;
        display: inline-block;
        width: 50%;
    }

    .search::after {
        content: '';
        position: absolute;
        top: 0;
        right: 10px;
        width: 25px;
        height: 25px;
        background: url('./assets/img/search.svg') no-repeat 50% 50%;
        background-size: contain;
        transform: translateY(50%);
        cursor: pointer;
    }

    .input {
        width: 100%;
        padding: 16px;
        font-family: 'Inter', Arial, sans-serif;
        color: $white;
        background: url('/src/assets/img/gradient-1.jpg') no-repeat 0% 0%;
        background-size: cover;
        border-radius: 16px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .main {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }
</style>
