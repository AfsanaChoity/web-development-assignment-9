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
import Login from './components/Login';
import Register from './components/Register';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

  </React.StrictMode>,
)
