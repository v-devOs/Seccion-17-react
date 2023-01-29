import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";


export const startNewNote = () => {
  return async( dispatch, getState ) => {
    
    dispatch( savingNewNote() );

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc( collection(FirebaseDb, `${uid}/journal/notes` ))
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id

    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) )
  }
}

export const startLoadingNotes = () => {
  return async( dispatch, getState ) => {

    const { uid } = getState().auth
    if( !uid ) throw new Error( 'No se encontro el uid del usuario' )

    const notes = await loadNotes( uid );

    dispatch( setNotes( notes ))
  }
}

export const startSaveNote = () => {
  return async( dispatch, getState ) => {

    dispatch( setSaving() )

    const { uid } = getState().auth;
    const {active:note} = getState().journal;

    const noteToFireStore = {...note};
    delete noteToFireStore.id

    const docRef = doc( FirebaseDb, `${uid}/journal/notes/${note.id}`);
    await setDoc( docRef, noteToFireStore, { merge: true })

    dispatch( updateNote( note ))
  }
}