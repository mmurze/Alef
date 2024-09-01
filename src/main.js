import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/router.js'
import pinia from "./plugins/pinia.js";

createApp(App)
	.use(router)
	.use(pinia)
	.mount('#app')
