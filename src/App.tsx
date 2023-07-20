import { RouterProvider } from 'react-router-dom';

import { Auth } from './layouts';
import router from './router';

function App() {
  return (
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  );
}

export default App;
