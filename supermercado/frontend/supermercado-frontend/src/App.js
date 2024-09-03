import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Clientes from './components/Clientes';
import Productos from './components/Productos';
import Ventas from './components/Ventas';
import './App.css'; // Asegúrate de tener este archivo de estilos

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="header-left">
            <img src="/images/carrito.png" alt="Carrito de Compras" className="cart-icon" />
          </div>
          <h1>Supermercado Antojitos</h1>
          <div className="header-right">
            <img src="/images/anto.png" alt="Logo" className="logo" />
          </div>
          <nav>
            <Link to="/clientes" className="nav-button">Clientes</Link>
            <Link to="/productos" className="nav-button">Productos</Link>
            <Link to="/ventas" className="nav-button">Ventas</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/ventas" element={<Ventas />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 Supermercado Antojitos. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
