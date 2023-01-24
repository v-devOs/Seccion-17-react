import { Grid, Typography } from "@mui/material"
import {faStar} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NothingSelectedView = () => {
  return (
    <Grid 
      container
      spacing = {0}
      direction = 'column'
      alignItems = {'center'}
      justifyContent = 'center'
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
    > 

      <Grid item xs={12}>
        <FontAwesomeIcon icon={faStar} className='icon-nothing-selected'/>
      </Grid>
      <Grid item xs={12}>
        <Typography color={'white'} variant='h5'>Selecciona o crea una entrada</Typography>
      </Grid>
    </Grid>
  )
}
