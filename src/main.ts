import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import QRCode from './components/QRCode.vue'

const routes = [
  {
    path: '/qr-code',
    component: QRCode
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
