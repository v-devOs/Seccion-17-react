import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useState } from 'react'

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

  const [formSubmited, setFormSubmited] = useState(false);

  const { displayName ,email, password, onInputChange, formState,
          isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations )

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmited( true )
    console.log(formState);
  }

  return (
    <AuthLayout title='Crear Cuenta'> 

      <h1>FormValid {isFormValid ? 'Valid': 'Incorrecto'} </h1>

      <form onSubmit={onSubmit} >
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
              label='Contraseña' 
              type={'password'} 
              placeholder='contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              helperText={ passwordValid  }
              error={ !!passwordValid && formSubmited }
              />
            </Grid>

            <Grid container spacing={ 2 } sx = {{mb: 2, mt: 1}}>

              <Grid item xs={12}>
                <Button type='submit' variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>

            </Grid>
            
            <Grid container direction='row' justifyContent={'end'}>
              <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color={'inherit'} to='/auth/login'>
                ingresar
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

        

      
  )
}
