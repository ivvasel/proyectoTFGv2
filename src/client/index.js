import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
//import App from './App';

import './style/main.css'

//Crea la constante 'root' seleccionado el div con id = root
const container = document.getElementById('app');
const root = createRoot(container);
const App = ()=>{
  return <h1>
    Hello World!
  </h1>
}

//Renderiza el div seleccionado
root.render(
  <App/>
)