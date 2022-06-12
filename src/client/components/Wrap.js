import React from "react";

import firebaseApp from "../firebase/credenciales-firebase";
import { getAuth,signOut } from "firebase/auth";

import { Container, Button } from "react-bootstrap";
const auth = getAuth(firebaseApp);

export const Wrap = () => {
    return  <Container>
        <h4>
        Hola, sesión iniciada

        </h4>
        <Button onClick={()=> signOut(auth)}> Cerrar Sesión</Button>


    </Container>   
    
}