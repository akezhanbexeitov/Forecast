import { createRouter, createWebHistory } from 'vue-router'
import Highlights from '../components/Highlights.vue'
import Coordinates from '../components/Coordinates.vue'
import Humidity from '../components/Humidity.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'root',
        component: Highlights
    },
    {
        path: '/coordinates',
        name: 'Coordinates',
        component: Coordinates
    },
    {
        path: '/humidity',
        name: 'Humidity',
        component: Humidity
    }
  ]
})

export default router
