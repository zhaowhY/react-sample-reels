/**
 * path // 路由
 * name // 路由名
 * component // 路由组件
 * hidden: false // 是否隐藏组件
 * meta: {icon: ''} // 路由附带信息
 */

const routes = [
  {
    path: '/pdf',
    name: 'PDF在线预览',
    component: () => import('@/views/PDF/index.js'),
  },
  {
    path: '/virtual-scroll',
    name: '虚拟滚动',
    component: () => import('@/views/VirtualScroll'),
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('@/views/Canvas'),
  },
  {
    path: '/lazyloadimg',
    name: '图片懒加载',
    component: () => import('@/views/LazyLoadImg'),
  },
];

export default [
  {
    path: '/',
    redirect: '/pdf'
  },
  ...routes,
];

export const externalLinks = [
  {
    path: 'https://kongkong99.github.io/react-tinymce/',
    name: '富文本编辑器'
  }
];
