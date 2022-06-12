//Firebase.js - Módulo de la BD
const firestore = require('./firebase/firestore');

exports.workout = async (req,res,next) =>{
    user = "TESTING"
    
    let busqueda = await firestore.verRutinaActiva(user);  
    console.log(busqueda);
    
    res.render('workout');

}