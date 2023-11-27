import React from 'react'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { createStandaloneToast } from '@chakra-ui/toast';
import './index.css'
import Pacientes from './Pages/Pacientes'
import Home from './Pages/Home';
import Servicos from './Pages/Servicos';
import Cursos from './Pages/Cursos';
import CadastroUsuario from './Pages/CadastroUsuario';
import CadastroProfissional from './Pages/CadastroProfissional';
import Page404 from './Pages/Page404';
import PageConstruindo from './Pages/PageConstruindo';
import ProDashboard from './Pages/ProDashboard';
import UserDashboard from './Pages/UserDashboard';
import Profissionais from './Pages/Profissionais';
import BuscarProfissional from './Pages/BuscarProfissional';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro-usuario",
    element: <CadastroUsuario />
  },
  {
    path: "/cadastro-profissional",
    element: <CadastroProfissional />
  },
  {
    path: "/dashboard-profissional",
    element: <ProDashboard />
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
  {
    path: "/dashboard-usuario",
    element: <UserDashboard />
  },
  {
    path: "/meus-cuidados",
    element: <Profissionais />
  },
  {
    path: "/buscar-profissional",
    element: <BuscarProfissional />
  },
  {
    path: "/trabalhando",
    element: <PageConstruindo />
  },
  {
    path: "/*",
    element: <Page404 />
  },
]);

const { ToastContainer, toast } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
