import {
  DashboardOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

import { LoginPage } from '../pages';

export interface Path {
  path: string;
  label: string;
  address: string;
  page?: JSX.Element;
  icon: JSX.Element;
  danger?: boolean;
}

const paths: Path[] = [
  {
    path: '/',
    label: 'Dashboard',
    address: '../pages/dashboard',
    icon: <DashboardOutlined />,
  },
  {
    path: '/products',
    label: 'Products',
    address: '../pages/products',
    icon: <ShopOutlined />,
  },
  {
    path: '/orders',
    label: 'Orders',
    address: '../pages/orders',
    icon: <ShoppingCartOutlined />,
  },
  {
    path: '/categories',
    label: 'Categories',
    address: '../pages/categories',
    icon: <UnorderedListOutlined />,
  },
  {
    path: '/users',
    label: 'Users',
    address: '../pages/users',
    icon: <TeamOutlined />,
  },
  {
    path: '/login',
    label: 'Logout',
    address: '',
    page: <LoginPage />,
    icon: <LogoutOutlined />,
    danger: true,
  },
];

export default paths;
