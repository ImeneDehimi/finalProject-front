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
import ServiceProvider from './pages/ServiceProvider/ServiceProvider.jsx';
import Notfound from './pages/Notfound/Notfound.jsx';
import Darkmode from 'darkmode-js';
import ServicesPage2 from './pages/ServicesPage2/ServicesPage2.jsx';
import ServicesPage3 from './pages/ServicesPage3/ServicesPage3.jsx';
import ServicesPage4 from './pages/ServicesPage4/ServicesPage4.jsx';
import Messages from './pages/Messages/Messages.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "*",
    element: <Notfound></Notfound>,
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
    path: "/createprofile/:id",
    element: <CreateProfile/>,
  },
  {
    path: "/upload/:ID",
    element: <Upload/>,
  },
  {
    path: "/electricians",
    element: <ServicesPage/>,
  },
  {
    path: "/plumbers",
    element: <ServicesPage2/>,
  },
  {
    path: "/painters",
    element: <ServicesPage3/>,
  },
  {
    path: "/builders",
    element: <ServicesPage4/>,
  },
  {
    path: "/profile/:ID",
    element: <Profile/>,
  },
  {
    path: "/serviceprovider/:Id",
    element: <ServiceProvider/>,
  },
  {
    path: "/messages",
    element: <Messages/>,
  }
]);
const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true ,// default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
