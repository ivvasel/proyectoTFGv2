import express from 'express';
import webpack  from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config.js';
import path from 'path';


const app = express();

// settings
//const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000; //utiliza un puerto config o el 3000
// Directorio Público
//app.use(express.static(publicPath));


// Escuchando el puerto
app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);
});

// middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies


// Rutas 
import routes from './routes.js';
app.use('/', routes );




