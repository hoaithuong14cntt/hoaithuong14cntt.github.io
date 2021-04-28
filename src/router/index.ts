import Page1 from '@/components/Home.vue';
import Page2 from '@/components/AboutMe.vue';
import Layout from '@/layout/index.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Page1
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
