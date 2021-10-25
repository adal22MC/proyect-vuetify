import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Empleados from '../views/Empleados.vue';
import Graficas from '../views/Graficas.vue';
import GenerarQR from '../views/GeneradorQR.vue';

Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/empleados',
        name: 'Empleados',
        component: Empleados
    },
    {
        path: '/grafica',
        name: 'Grafica',
        component: Graficas
    },
    {
        path: '/generar-qr',
        name: 'GenerarQR',
        component: GenerarQR
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router