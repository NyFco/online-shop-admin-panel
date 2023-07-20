import { Dashboard, LoginPage } from '../pages';

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
    path: '/login',
    page: <LoginPage />,
  },
];

export default paths;
