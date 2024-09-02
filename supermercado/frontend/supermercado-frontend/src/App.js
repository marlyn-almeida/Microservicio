import React, { useState } from 'react';
import Clientes from './components/Clientes';
import Productos from './components/Productos';
import Ventas from './components/Ventas';
import './App.css'; // Asegúrate de tener este archivo de estilos

const App = () => {
  const [showSection, setShowSection] = useState('');

  return (
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
          <button
            className={`nav-button ${showSection === 'clientes' ? 'active' : ''}`}
            onClick={() => setShowSection('clientes')}
          >
            {showSection === 'clientes' ? 'Ocultar Clientes' : 'Mostrar Clientes'}
          </button>
          <button
            className={`nav-button ${showSection === 'productos' ? 'active' : ''}`}
            onClick={() => setShowSection('productos')}
          >
            {showSection === 'productos' ? 'Ocultar Productos' : 'Mostrar Productos'}
          </button>
          <button
            className={`nav-button ${showSection === 'ventas' ? 'active' : ''}`}
            onClick={() => setShowSection('ventas')}
          >
            {showSection === 'ventas' ? 'Ocultar Ventas' : 'Mostrar Ventas'}
          </button>
        </nav>
      </header>

      <main className="content">
        {showSection === 'clientes' && <Clientes />}
        {showSection === 'productos' && <Productos />}
        {showSection === 'ventas' && <Ventas />}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Supermercado Antojitos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
