// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
    id: 'Menu_s44mp',
  },

  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
    id: 'Menu_6trng',
  },

  { name: '退出', path: '/user/login', icon: 'yonghu', id: 'Menu_f7o08' },
];

const asideMenuConfig = [
  { name: '工作台', path: '/dashboard', icon: 'home2', id: 'Menu_blvre' },
  { name: '订单报表', path: '/order/report', icon: 'chart', id: 'Menu_rvit3' },
  { name: '订单管理', path: '/order/list', icon: 'shopcar', id: 'Menu_wxvl3' },
  { name: '退单管理', path: '/chargeback', icon: 'cascades', id: 'Menu_1774u' },
  { name: '发货管理', path: '/dispatch', icon: 'clock', id: 'Menu_k0cgh' },
  { name: '商品管理', path: '/goods', icon: 'shopcar', id: 'Menu_xx5kf' },
  {
    name: '添加订单',
    path: '/add/order',
    icon: 'edit2',
    id: 'Menu_nwdtw',
    children: [],
  },
  { name: '添加商品', path: '/add/goods', icon: 'publish', id: 'Menu_y9ljs' },
  { name: '颜色配置', path: '/conf/colour', id: 'Menu_v8fik', icon: 'publish' },
  { name: '尺寸配置', path: '/conf/size', id: 'Menu_73t3p', icon: 'publish' },
  {
    name: '类别配置',
    path: '/conf/category',
    id: 'Menu_9kj87',
    icon: 'publish',
  },
  {
    name: '规格配置',
    path: '/conf/format',
    id: 'Menu_l2845',
    icon: 'publish',
    children: [],
  },
];

export { headerMenuConfig, asideMenuConfig };
