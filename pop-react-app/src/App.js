import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/header-and-footer/Footer';
import { Header } from './components/header-and-footer/Header';
import React, { useEffect } from 'react';
import { Dashboard } from './components/dashboard/Dashboard';
import { MenuHeader } from './components/sidebar/MenuHeader';

function App() {


  const REACT_PUBLIC_ASSETS_URL = 'https://cdn.livingstonintl.com/digital-design/dev';
  const REACT_PUBLIC_ASSETS_URL_CSS = `${REACT_PUBLIC_ASSETS_URL}/main-2.3.css`;

  useEffect(() => {
    const link = document.createElement('link');
    link.href = REACT_PUBLIC_ASSETS_URL_CSS;
    link.rel = 'stylesheet';
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
  }, [REACT_PUBLIC_ASSETS_URL_CSS]);

  // Load bootstrap js
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
    <header>
      <Header />
      <MenuHeader></MenuHeader>
    </header>
    <Dashboard/>
      
      <Footer />
    </>
  );
}

export default App;
