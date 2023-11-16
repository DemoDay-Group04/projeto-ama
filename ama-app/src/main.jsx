import React from 'react'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Pacientes from './Pages/Pacientes'
import Home from './Pages/Home';
import Servicos from './Pages/Servicos';
import Cursos from './Pages/Cursos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pacientes",
    element: <Pacientes />
  },
  {
    path: "/servicos",
    element: <Servicos/>
  },
  {
    path: "/cursos",
    element: <Cursos />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
