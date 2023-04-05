import { createBrowserRouter } from 'react-router-dom';

import Home from 'src/app/pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({
      headerText: 'AGENTS',
    }),
    element: <Home />,
  },
]);