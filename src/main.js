import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseStyle from '@/components/layout/BaseStyle.vue'
import ElementPlus from 'element-plus'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'; // Importa el archivo CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.js';


createApp(App)
    .use(router)
    .use(BaseStyle)
    .use(ElementPlus)
    .use(store)
    .mount('#app')
