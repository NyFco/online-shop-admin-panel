import { lazy } from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = lazy(() => import('../pages/404'));

interface RouteError {
  status: number;
}

const Error = () => {
  const error = useRouteError();

  if (isRouteError(error)) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>Something went wrong...</h1>
    </div>
  );
};

const isRouteError = (error: any): error is RouteError => {
  return error && typeof error.status === 'number';
};

export default Error;
