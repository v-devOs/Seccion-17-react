import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSave: '',
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true
    },
    addNewEmptyNote: ( state,  action  ) => {
      state.notes.push( action.payload )
      state.isSaving = false
    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload;
      state.messageSave = ``
    },
    setNotes: ( state, action ) => {
      state.notes = action.payload
    },
    setSaving: ( state ) => {
      state.isSaving = true;
      state.messageSave = ``
    },
    updateNote: ( state, { payload } ) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => {
        return note.id === payload.id
        ? note = payload
        : note
      })

      state.messageSave = `${ payload.title }, actualizada correctamente`

    },
    deleteNoteById: ( state, action ) => {
    
    },
    setPhotosToActiveNote: ( state, action ) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogout: ( state ) => {
      state.isSaving = false;
      state.messageSave = '';
      state.notes = [],
      state.active = null
    }
    
  },
})

export const { 
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote, 
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
  clearNotesLogout
} = journalSlice.actions