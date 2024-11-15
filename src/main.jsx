import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Componenets/MainLayouts/MainLayouts';
import Home from './Componenets/Navbar/Home';
import Statistics from './Componenets/Statistics';
import Dashboard from './Componenets/Dashboard';
import MainHome from './Componenets/MainHome';
import GadgetCards from './Componenets/GadgetCards';
import GadgetDetails from './Componenets/GadgetDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <MainHome></MainHome>,
        loader: () => fetch('../GadgetId.json'),
        children:[
          {
            path:'/',
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../gadget.json'),
          },
          {
            path:'/gadget/:gadget',
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../gadget.json'),
          },
        ],
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/statistics/:id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('../gadget.json'),
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
