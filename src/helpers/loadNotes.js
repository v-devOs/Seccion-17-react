import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDb } from "../firebase/config";

export const loadNotes = async( uid = '' ) => {
  if( !uid ) throw new Error( 'No se encontro el uid del usuario' );

  const collectionRef = collection( FirebaseDb, `${ uid }/journal/notes`)
  const docs = await getDocs( collectionRef )

  const notes = []
  docs.forEach( doc => {
    notes.push({ id: doc.id, ...doc.data() })
  })

  return notes;

}