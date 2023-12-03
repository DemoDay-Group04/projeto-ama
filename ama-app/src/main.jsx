import React from 'react'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { createStandaloneToast } from '@chakra-ui/toast';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/pt-br';
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
import Doacao from './Pages/Doacao';
import BancosLeite from './Pages/BancosLeite';
import BancosAlimentos from './Pages/BancosAlimentos';
import Estudio from './Pages/Estudio';
import UserAgendamento from './Pages/UserAgendamento';
import ProAgendamento from './Pages/ProAgendamento';

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
    path: "/estudio-de-criacao",
    element: <Estudio />
  },
  {
    path: "/agendamento-profissional",
    element: <ProAgendamento />
  },
  {
    path: "/doar",
    element: <Doacao />
  },
  {
    path: "/doar-leite",
    element: <BancosLeite />
  },
  {
    path: "/doar-formula",
    element: <BancosAlimentos />
  },
  {
    path: "/dashboard-usuario",
    element: <UserDashboard />
  },
  {
    path: "/agendamento-usuario",
    element: <UserAgendamento />
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

const { ToastContainer } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <RouterProvider router={router}/>
    </LocalizationProvider>
  </React.StrictMode>,
)
