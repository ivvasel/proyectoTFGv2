import React, {useState, useEffect} from "react";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import 'flowbite';

import firebaseApp from "./credenciales-firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(firebaseApp);


function App() {
  // Inicializa la constante del usuario y le aplica el estado null
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      // Código cuando hay sesion iniciada
      setUsuarioGlobal(usuarioFirebase);
      const diplayName = usuarioFirebase.displayName;
      const userId = usuarioFirebase.uid;
      console.log(userId);
    }else{
      // No hay sesion iniciada
      setUsuarioGlobal(null);
    }
  })

    return <> {usuarioGlobal ? <Home /> : <Login/>} </>;
    //Si usuarioGlobal existe abre el componente Home si no abre el componente Logueo.
}

export default App;
