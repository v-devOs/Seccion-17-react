import { Button, Grid, TextField, Typography } from "@mui/material"
import {faFloppyDisk} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ImageGallery } from "../components"
import { useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useMemo } from "react"

export const NoteView = () => {

  const { active:note} = useSelector( state => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(note)

  const dateString = useMemo( () => {
    const newDate = new Date( date );
    return newDate.toUTCString()
  }, [ date ])
  
  return (
    <Grid container direction={'row'} justifyContent='space-between' alignItems={'center'} sx={{ mb: 1}}>
      <Grid item>
        <Typography fontSize={30} fontWeight='ligth'>{dateString}</Typography>
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
          name='title'
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type= 'text'
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio en el dia de hoy?"
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
