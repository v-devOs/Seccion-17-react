// import { async } from "@firebase/util"
// import { updateProfile } from "firebase/auth"
// import { FireBaseAuth } from "../../firebase/config"
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
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

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })

    if( !ok ) return dispatch(logout( {errorMessage}))
    
    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLoginWithEmmailPassword = ( email, password ) => {
  return async( dispatch ) => {
    dispatch( checkingCrendential() )

    const result  = await loginWithEmailPassword( {email, password} )

    if( !result.ok ) return dispatch( logout({errorMessage: result.errorMessage }))

    dispatch(login( result ))
    
  }
}