import React from 'react'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Pacientes from './Pages/Pacientes'
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pacientes",
    element: <Pacientes />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
