import React from "react";

import firebaseApp from "../credenciales-firebase";
import { getAuth,signOut } from "firebase/auth";

import { Container, Button } from "react-bootstrap";
const auth = getAuth(firebaseApp);

export const Home = () => {
    return  <Container>
        <h4>
        Hola, sesión iniciada

        </h4>
        <Button onClick={()=> signOut(auth)}> Cerrar Sesión</Button>


    </Container>   
    
}

