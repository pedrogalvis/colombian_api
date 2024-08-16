import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { ApiColombiaProvider } from './context/ApiColombia';
import { ColombiaDash } from './app/ColombiaDash';
import './css/index.css';

const router = createBrowserRouter([
  {
    path: 'colombia_dash',
    element: <ColombiaDash />,
  },
  {
    path: '*',
    element: <Navigate to='/colombia_dash' />,
  },
]);

export function App() {
  return (
    <ApiColombiaProvider>
      <RouterProvider router={router} />
    </ApiColombiaProvider>
  );
}
