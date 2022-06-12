import React, {useState} from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";
//import { Stack, Container, Form, Button } from "tailwindcss";

import firebaseApp from "../firebase/credenciales-firebase";
import {
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider    
} from "firebase/auth";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();


export const Login = () => {
    const [estaRegistrandose, setRegistrandose] = useState(false);
    async function submitHandle(e){
        e.preventDefault();
        const correo = e.target.formBasicEmail.value;
        const pass = e.target.formBasicPassword.value; // Contraseña minimo de 6 caracteres

        if(estaRegistrandose){
            // Si se registra
            const usuario = await createUserWithEmailAndPassword(auth, correo, pass);
        }else {
            //Iniciando sesion
            signInWithEmailAndPassword(auth, correo,pass);
        }


    }

    return (
        <Container>
            <Stack gap={3}>
                <h1>{estaRegistrandose ? "Registrate" : "Inicia Sesión"}</h1>
                <Form onSubmit={submitHandle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {estaRegistrandose ? "Registrate" : "Inicia sesión"}
                    </Button>
                </Form>

                <Button variant="primary" type="submit" onClick={()=>signInWithRedirect(auth, googleProvider)}>
                    Acceder con Google
                </Button>

                <Button variant="primary" type="submit" onClick={()=> setRegistrandose (!estaRegistrandose)}>
                    {estaRegistrandose 
                    ? "¿Ya tienes cuenta? Inicia sesión" 
                    : "¿No tienes cuenta? Registrate"}
                </Button>


            </Stack>



        </Container>

    );
};
