import { createBrowserRouter } from 'react-router-dom';

import Agent from '@pages/Agent/Agent';
import Home from '@pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({
      headerText: 'AGENTS',
    }),
    element: <Home />,
  },
  {
    path: "/agents/:name/:id",
    loader: ({ params }) => ({
      headerText: params.name,
    }),
    element: <Agent />,
  },
]);