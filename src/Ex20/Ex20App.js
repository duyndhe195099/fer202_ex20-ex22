import React from 'react';
import { Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
import NavigationMenu from './NavigationMenu';

// "App" của Ex 20 trong đề. Khác đề: không còn <Router> ở đây vì đã có Router
// duy nhất trong index.js. <Routes> này là route "con" của "ex20/*" trong App.js.
const Ex20App = () => {
  return (
    <div className="container py-3">
      <NavigationMenu />
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};

export default Ex20App;
