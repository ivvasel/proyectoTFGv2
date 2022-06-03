import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Crea la constante 'root' seleccionado el div con id = root
const root = ReactDOM.createRoot(document.getElementById('root'));

//Renderiza el div seleccionado
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

