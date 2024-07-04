import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { HomeBusiness } from './pages/home-business/home-business';
import { HomeClient } from './pages/home-client/home-client';
import './reset.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/business',
        element: <HomeBusiness />,
      },
      {
        path: '/client',
        element: <HomeClient />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
