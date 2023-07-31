import {
  DashboardOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
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
    label: 'Categories',
    key: '/categories',
    icon: <UnorderedListOutlined />,
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: <LogoutOutlined />,
    danger: true,
  },
];

export default menuItems;
