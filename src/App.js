import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

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
import PageNotFoundView from './pages/PageNotFound';
import SettingsView from './pages/Settings'; 
import HomeView from './pages/Home';
import { Navigate } from 'react-router-dom';


/**
 * App component
 * @returns 
 */
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
        { path: 'contact', element: <ContactView /> },
        { path: 'settings', element: <SettingsView /> },
        { path: 'home', element: <HomeView /> }, 

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
