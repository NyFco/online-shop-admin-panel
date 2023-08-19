import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Error from '../error';
import { MainLayout } from '../layouts';

import paths from './paths';

const lazyLoad = (address: string): JSX.Element => {
  const LazyComponent = lazy(() => import(address));
  return <LazyComponent />;
};

const router = createBrowserRouter(
  paths.map((path) => ({
    path: path.path,
    element:
      path.path !== '/login' ? (
        <MainLayout>
          <Suspense fallback={<h1>Loading...</h1>}>
            {lazyLoad(path.address)}
          </Suspense>
        </MainLayout>
      ) : (
        path.page
      ),
    ErrorBoundary: Error,
  }))
);

export default router;
