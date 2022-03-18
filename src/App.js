import './App.scss';
import './asset/boxicons-2.0.7/css/boxicons.min.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header/Header';
import Router from './router/Router'

import { UserAuthContextProvider } from './context/UserAuthContext'
function App() {


  return (
    <BrowserRouter>
    <UserAuthContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header/>
      <Router/>
    </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
