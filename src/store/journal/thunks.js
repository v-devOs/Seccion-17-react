import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";


export const startNewNote = () => {
  return async( dispatch, getState ) => {
    
    dispatch( savingNewNote() );

    const { uid } = getState().auth;

    const newNote = {
      imageUrls: [],
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

export const startUploadingFiles = ( files = [] ) => {
  return async( dispatch ) => {
    dispatch(setSaving())

    const fileUploadPromises = [];

    for (const file of files) {
      fileUploadPromises.push(fileUpload( file ));
    }

    const photosURLS =  await Promise.all( fileUploadPromises );


    dispatch( setPhotosToActiveNote( photosURLS ))

  }
}

export const startDeletingNote = () => {
  return async( dispatch, getState ) => {
    
    const { uid } = getState().auth;
    const { active: note } = getState().journal;


    const docRef = doc( FirebaseDb, `${uid}/journal/notes/${note.id}`);
    const resp = await deleteDoc( docRef );
    
    dispatch( deleteNoteById( note.id ) );
  }
}