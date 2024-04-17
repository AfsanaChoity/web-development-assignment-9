import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import UpdateProfile from './privateRoute/UpdateProfile';
import UserProfile from './privateRoute/UserProfile';
import Contact from './privateRoute/Contact';
import Login from './components/Login';
import Register from './components/Register';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './privateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/userProfile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
     
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
