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
    
    }
    
  },
})

export const { 
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote, 
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions