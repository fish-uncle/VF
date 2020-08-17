const routes = [
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
];
module.exports = routes;