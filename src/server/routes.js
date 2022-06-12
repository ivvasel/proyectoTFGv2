//Route.js - Módulo de rutas
import  Router from 'express';
const routes = Router();

// Get mensajes
routes.get('/', (req, res) => {
    res.send('Hola Mundo');
    });

routes.get('/api', (req,res) =>{

        res.json({
            api: 'Works'
        });
    
    })

export default routes;