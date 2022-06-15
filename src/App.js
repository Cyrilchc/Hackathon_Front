import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Listes from './pages/Listes';
/**
 * Layouts
 */
import MainLayout from './layouts/MainLayout';

/**
 * Views
 */

//theo//
import PlanningView from './pages/Planning';
import ContactView from './pages/Contact';
import LoginView from './pages/Login';
import TeacherLayout from './layouts/Notes/Teacher/TeacherLayout';
import NotesTeacherDashboardView from './pages/Notes/Teacher/Dashboard';
import NotesTeacherCreateView from './pages/Notes/Teacher/Create';
import TchatCreate from './pages/Tchat/Create';
import TchatUpdate from './pages/Tchat/Update';
import Tchat from './pages/Tchat/Tchat';
import PageNotFoundView from './pages/PageNotFound';
import TchatAccueil from './components/Tchat/TchatAccueil';
import SettingsView from './pages/Settings'; 
import HomeView from './pages/Home';
import AdminView from './pages/Admin'
import { Navigate } from 'react-router-dom';


/**
 * App component
 * @returns 
 */

//test
const App = () => {
  /**
   * routes 
   * On rentre dans la variable <routes> la fonction de react-router-dom <useRoutes([])>
   * On fait appel a des composants layouts :
   * A l'interieur de chaque layout apparaitra un children (enfant)
   * Ex : Quand on est a la racine du projet, nous utilisons le layout <MainLayout>
   * Une route se definit sous forme d'objet -> { path : <URL_du_chemin>, element : <Composant>, children(optionnel) : autre route}
   */
  const routes = useRoutes([
    {
      path: '', element: <MainLayout />, children: [
        { path : '*', element : <PageNotFoundView />},
        { path: '', element: <LoginView /> },
        { path: 'planning', element: <PlanningView /> },
        { path: 'login', element: <LoginView /> },
        { path: 'tchat', children: [
          { path: '', element: <TchatAccueil type="ded"/>},
          { path: 'liste', children: [
            { path: 'old', element: <Listes affichage="Anciens"/> },
            { path: 'new', element: <Listes affichage="Nouveaux"/> },
          ]},
          { path: '*', element: <Tchat />},
          { path: 'create', element: <TchatCreate />},
          { path: 'update', children: [
            { path: '*', element: <TchatUpdate />},
          ]},
        ]},
        { path: 'contact', element: <ContactView /> },
        { path: 'settings', element: <SettingsView /> },
        { path: 'home', element: <HomeView /> }, 
        { path: 'admin', element: <AdminView /> },
        {
          path: 'gestion-des-notes', element: <TeacherLayout />, children: [
            { path: '', element: <Navigate to="creation" /> },
            { path: 'creation', element: <NotesTeacherCreateView /> }, 
            { path: 'visualisation', element : <NotesTeacherDashboardView/>}
          ]
        }

      ]
    }
  ])

  React.useEffect(() => {
    document.title = "Estiam Pronote"
  }, [])


  return (
    <>
      {routes}
      <Outlet />
    </>
  );
}

export default App;
