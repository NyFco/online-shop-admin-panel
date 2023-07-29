import { Dashboard, LoginPage, ProductsPage } from '../pages';

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
    path: '/login',
    page: <LoginPage />,
  },
];

export default paths;
