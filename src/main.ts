import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'normalize.css';
import '@/styles/index.scss';
import VueScrollTo from 'vue-scrollto';

createApp(App)
  .use(router)
  .use(VueScrollTo)
  .mount('#app');
