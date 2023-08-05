import {
  DashboardOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

import {
  CategoriesPage,
  Dashboard,
  LoginPage,
  OrdersPage,
  ProductsPage,
  UsersPage,
} from '../pages';

export interface Path {
  path: string;
  label: string;
  page: JSX.Element;
  icon: JSX.Element;
  danger?: boolean;
}

const paths: Path[] = [
  {
    path: '/',
    label: 'Dashboard',
    page: <Dashboard />,
    icon: <DashboardOutlined />,
  },
  {
    path: '/products',
    label: 'Products',
    page: <ProductsPage />,
    icon: <ShopOutlined />,
  },
  {
    path: '/orders',
    label: 'Orders',
    page: <OrdersPage />,
    icon: <ShoppingCartOutlined />,
  },
  {
    path: '/categories',
    label: 'Categories',
    page: <CategoriesPage />,
    icon: <UnorderedListOutlined />,
  },
  {
    path: '/users',
    label: 'Users',
    page: <UsersPage />,
    icon: <TeamOutlined />,
  },
  {
    path: '/login',
    label: 'Logout',
    page: <LoginPage />,
    icon: <LogoutOutlined />,
    danger: true,
  },
];

export default paths;
