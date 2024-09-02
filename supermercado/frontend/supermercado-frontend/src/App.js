import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Clientes from './components/Clientes';
import Productos from './components/Productos'; // Asegúrate de que el componente se llama Productos
import Ventas from './components/Ventas';
import './index.css'; // Asegúrate de que este archivo existe y está bien configurado

function App() {
  return (
    <Router>
      <div className="header">
        <h1>Supermercado Antojitos</h1>
        <nav>
          <Link to="/">Clientes</Link>
          <Link to="/inventario">Inventario</Link>
          <Link to="/ventas">Ventas</Link>
        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/inventario" element={<Productos />} />
          <Route path="/ventas" element={<Ventas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
