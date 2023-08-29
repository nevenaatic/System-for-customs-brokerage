import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/header-and-footer/Footer';
import { Header } from './components/header-and-footer/Header';
import React, { useEffect } from 'react';
import { Dashboard } from './components/dashboard/Dashboard';
import { MenuHeader } from './components/sidebar/MenuHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Dodajemo import za BrowserRouter, Route i Routes
import {Policy } from './components/policy/Policy'
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
    <Router>
      <header>
        <Header />
        <MenuHeader />
      </header>
      <Routes> {/* Dodajemo omotač za rute */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
