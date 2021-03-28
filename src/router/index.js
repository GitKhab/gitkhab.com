import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseLayout from "@/views/BaseLayout";
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: Home,
        component: Home,
        meta: {
          title: 'Резюме на позицию «junior frontend-разработчик»'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} ‒ GitKhab.com` : 'GitKhab.com';
  next();
})

export default router
