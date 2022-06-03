import React, {useState, useEffect} from "react";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

function App() {
  // Inicializa la constante del usuario y le aplica el estado null
  const {usuarioGlobal, setUsuarioGlobal} = useState(null); 

    return <> {usuarioGlobal ? <Home /> : <Login/>} </>;
    //Si usuarioGlobal existe abre el componente Home si no abre el componente Logueo.
}

export default App;
