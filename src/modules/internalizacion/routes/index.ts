import type{ RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/', 
        name: 'matriz',
        component: ()=> import('../components/matrizInternalizacion.vue') 
    },
    {
        path: '/agregar',
        name: 'agregar',
        component: ()=> import('../components/AgregarRegistro.vue')  
    },
    {
        path: '/actualizar/:id', 
        name: 'actualizar',
        component: ()=> import('../components/AgregarRegistro.vue')  
    }
]

export default routes

