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
