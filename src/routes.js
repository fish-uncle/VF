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
    path: '/previewAll',
    name: 'PreviewAll',
    component: () => import('./pages/PreviewAll')
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('./pages/Test')
  },
];
module.exports = routes;