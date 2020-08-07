import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/updateLog',
      name: 'UpdateLog',
      component: () => import('./pages/updateLog')
    },
    {
      path: '/help/:name',
      name: 'Help',
      component: () => import('./pages/help')
    },
    {
      path: '/',
      name: 'Admin',
      component: () => import('./pages/Admin')
    },
  ]
});

export default router;
