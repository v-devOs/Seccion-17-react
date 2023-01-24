import { Button, Grid, TextField, Typography } from "@mui/material"
import {faFloppyDisk} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NoteView = () => {
  return (
    <Grid container direction={'row'} justifyContent='space-between' alignItems={'center'} sx={{ mb: 1}}>
      <Grid item>
        <Typography fontSize={30} fontWeight='ligth'>28 de agosto, 2023</Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{padding: 2}}>
          <FontAwesomeIcon icon={ faFloppyDisk } className='icon-save'/>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type= 'text'
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label='titulo'
          sx={{ border: "none", mb: 1 }}
        />

        <TextField
          type= 'text'
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio en el dia de hoy?"
          minRows={5}
        />
      </Grid>

      
    </Grid>
  )
}
