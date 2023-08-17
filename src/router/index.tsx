import { createBrowserRouter } from 'react-router-dom';

import Error from '../error';
import { MainLayout } from '../layouts';

import paths from './paths';

const router = createBrowserRouter(
  paths.map((path) => ({
    path: path.path,
    element:
      path.path !== '/login' ? <MainLayout>{path.page}</MainLayout> : path.page,
    ErrorBoundary: Error,
  }))
);

export default router;
