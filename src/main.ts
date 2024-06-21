import { createApp } from 'vue'
import './modules/internalizacion/css/main.css'
import './index.css'

import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router';
// import '../node_modules/flowbite-vue/dist/index.css'

createApp(App)
.use(router)
.use(VueQueryPlugin)
.mount('#app')

