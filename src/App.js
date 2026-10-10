import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Redirect from './components/Redirect';
import Ex20App from './Ex20/Ex20App';
import Ex21App from './Ex21/Ex21App';
import Ex22App from './Ex22/Ex22App';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Redirect path="/ex20" />} />
        <Route path="ex20/*" element={<Ex20App />} />
        <Route path="ex21/*" element={<Ex21App />} />
        <Route path="ex22/*" element={<Ex22App />} />
        <Route path="*" element={<p className="container py-3">404 - Page not found</p>} />
      </Route>
    </Routes>
  );
}

export default App;
