import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/Login.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import Register from './pages/register/Register.jsx';
import CreateProfile from './pages/CreateProfile/CreateProfile.jsx';
import Upload from './components/Upload/Upload.jsx';
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx';
import Profile from './pages/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/createprofile",
    element: <CreateProfile/>,
  },
  {
    path: "/upload",
    element: <Upload/>,
  },
  {
    path: "/services",
    element: <ServicesPage/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
