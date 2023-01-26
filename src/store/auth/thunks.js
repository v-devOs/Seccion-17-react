import { checkingCrendential } from "./"

export const checkingAuthentication = ( email, password ) => {
  return async( dispatch ) => {
    
    dispatch( checkingCrendential() )
  } 
}


export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    
    dispatch( checkingCrendential() )
  }

}