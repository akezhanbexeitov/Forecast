import { defineStore } from "pinia";

export const useWeatherInfo = defineStore('weatherInfo', {
    state: () => {
        return {
            weather: null
        }
    },
    actions: {
        setWeatherInfo(data) {
            this.weather = {...data}
        }
    },
    getters: {}
})
