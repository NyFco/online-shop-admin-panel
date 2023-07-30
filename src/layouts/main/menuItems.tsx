import {
  DashboardOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const menuItems = [
  {
    label: 'Dashboard',
    key: '/',
    icon: <DashboardOutlined />,
  },
  {
    label: 'Products',
    key: '/products',
    icon: <ShopOutlined />,
  },
  {
    label: 'Orders',
    key: '/orders',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: <LogoutOutlined />,
    danger: true,
  },
];

export default menuItems;
