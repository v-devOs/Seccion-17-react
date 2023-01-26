import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // not-authenticated, auntenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: ( state, action ) => {
      
    },
    logout: ( state, payload ) => {
    
    },
    checkingCrendential: ( state ) => {
      
    }
  },
})

export const { login, logout, checkingCrendential } = authSlice.actions