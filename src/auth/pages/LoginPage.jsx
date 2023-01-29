import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmmailPassword } from '../../store/auth/thunks'

const formData =  {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth)
  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm( formData )

  const isAuthenticating = useMemo( () => status === 'checking',[status])

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch( startLoginWithEmmailPassword( email, password ))
    // dispatch( checkingAuthentication( email, password ) )
    // console.log({ email, password});
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn ())
  }


  return (
    <AuthLayout title='Login'> 
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs = {12} sx={{ mt: 2}}>
              <TextField 
              label='Correo' 
              type={'email'} 
              placeholder='correo@google.com'
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
              />
            </Grid>

            <Grid item xs = {12} sx={{ mt: 2}}>
              <TextField 
              label='Contraseña' 
              type={'password'} 
              placeholder='contraseña'
              fullWidth
              name='password'
              onChange={onInputChange}
              value={password}
              />
            </Grid>

            <Grid container spacing={ 2 } sx = {{mb: 1, mt: 1}}>

              <Grid item xs={12} sm={12} display={ !!errorMessage? '': 'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  onClick={onSubmit}
                  disabled={ isAuthenticating }
                  type='submit' 
                  variant="contained" 
                  fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  onClick={onGoogleSignIn} 
                  variant="contained" 
                  fullWidth
                >
                  <FontAwesomeIcon icon={faGoogle}/>
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>

            </Grid>
            
            <Grid container direction='row' justifyContent={'end'}>
              <Link component={RouterLink} color={'inherit'} to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

        

      
  )
}
