import { useMemo, useState } from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const { status, errorMessage } = useSelector( state => state.auth)
  const isCheckingAunthentication = useMemo( () => status === 'checking', [status])

  const [formSubmited, setFormSubmited] = useState(false);

  const { displayName ,email, password, onInputChange, formState,
          isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations )

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmited( true )

    if( !isFormValid ) return

    dispatch( startCreatingUserWithEmailPassword( formState ) )

  }

  return (
    <AuthLayout title='Crear Cuenta'> 

      <form onSubmit={onSubmit} 
            className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs = {12} sx={{ mt: 2}}>
              <TextField 
              label='Nombre completo' 
              type={'text'} 
              placeholder='Nombre completo'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              helperText={ displayNameValid  }
              error={ !!displayNameValid && formSubmited }
              
              />
            </Grid>
            
            <Grid item xs = {12} sx={{ mt: 2}}>
              <TextField 
              label='Correo' 
              type={'email'} 
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              helperText={ emailValid  }
              error={ !!emailValid && formSubmited }
              />
            </Grid>

            <Grid item xs = {12} sx={{ mt: 2}}>
              <TextField 
              label='Contrase??a' 
              type={'password'} 
              placeholder='contrase??a'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              helperText={ passwordValid  }
              error={ !!passwordValid && formSubmited }
              />
            </Grid>

            <Grid container spacing={ 2 } sx = {{mb: 2, mt: 1}}>

              <Grid 
                display={ !!errorMessage ? '': 'none' }
                item 
                xs={12}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>

            </Grid>
            <Grid container spacing={ 2 } sx = {{mb: 2, mt: 1}}>

              <Grid item xs={12}>
                <Button
                  disabled={ isCheckingAunthentication } 
                  type='submit' 
                  variant="contained" 
                  fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>

            </Grid>
            
            <Grid container direction='row' justifyContent={'end'}>
              <Typography sx={{mr: 1}}>??Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color={'inherit'} to='/auth/login'>
                ingresar
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

        

      
  )
}
