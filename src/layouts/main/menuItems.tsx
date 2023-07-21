import {
  DashboardOutlined,
  LogoutOutlined,
  ShopOutlined,
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
    label: 'Logout',
    key: 'logout',
    icon: <LogoutOutlined />,
    danger: true,
  },
];

export default menuItems;
