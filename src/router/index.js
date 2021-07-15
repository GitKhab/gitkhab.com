import Vue from 'vue';
import VueRouter from 'vue-router';
import BaseLayout from '@/views/BaseLayout';
import Home from '@/views/Home.vue';
import Error404 from '@/views/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: Home,
        component: Home
      }
    ]
  },
  {
    path: '*',
    component: Error404
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next();
})

export default router
