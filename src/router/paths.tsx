import {
  CategoriesPage,
  Dashboard,
  LoginPage,
  OrdersPage,
  ProductsPage,
} from '../pages';

export interface Path {
  path: string;
  page: JSX.Element;
}

const paths: Path[] = [
  {
    path: '/',
    page: <Dashboard />,
  },
  {
    path: '/products',
    page: <ProductsPage />,
  },
  {
    path: '/orders',
    page: <OrdersPage />,
  },
  {
    path: '/categories',
    page: <CategoriesPage />,
  },
  {
    path: '/login',
    page: <LoginPage />,
  },
];

export default paths;
