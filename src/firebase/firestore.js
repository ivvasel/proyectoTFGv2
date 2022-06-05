import firebaseApp from "../credenciales-firebase";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

async function buscarDoc (idDoc){
    // crear referencia al documento
    const docRef = doc(firestore, `usuarios/${idDocumento}`) ;
    // busca el documento
    const consulta = await getDoc(docRef);
    // revisar si existe
    if (consulta.exists()){
        // si existe
        const infoDoc = consulta.data();
        return infoDoc.tareas;

    } else {
        // no existe
        await setDoc(docRef, {reacciones: [...fakeData]})


    }
}
