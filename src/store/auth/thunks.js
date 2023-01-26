import { async } from "@firebase/util"
import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCrendential, login, logout } from "./"

export const checkingAuthentication = ( email, password ) => {
  return async( dispatch ) => {
    
    dispatch( checkingCrendential() )
  } 
}


export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    
    dispatch(checkingCrendential())

    const result = await signInWithGoogle()
    if( !result.ok ) return dispatch( logout( result.errorMessage ) );

    dispatch(login( result ))
  }

}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async( dispatch ) => {
    dispatch( checkingCrendential() );

    const resp = await registerUserWithEmailPassword({ email, password, displayName })

    console.log(resp);
  }
}