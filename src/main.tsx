import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { queryClient } from '@services/query-client.service';

import { router } from './Routes';
import './styles/index.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <main className="main-app bg-secondary">
        <RouterProvider router={router} />
      </main>
    </QueryClientProvider>
  </React.StrictMode>,
)
