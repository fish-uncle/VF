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
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('./pages/Preview')
    },
    {
      path: '/previewAll',
      name: 'PreviewAll',
      component: () => import('./pages/PreviewAll')
    },
  ]
});

export default router;
