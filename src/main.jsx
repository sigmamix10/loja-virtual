import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Estilos do PrimeReact e PrimeFlex
import 'primereact/resources/themes/lara-light-cyan/theme.css'; 
import 'primereact/resources/primereact.css'; // <-- Altere aqui, removendo o .min
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// CSS padrão do Vite
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);