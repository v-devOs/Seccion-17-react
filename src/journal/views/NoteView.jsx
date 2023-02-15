import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import {faFloppyDisk} from '@fortawesome/free-regular-svg-icons'
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

  const dispatch = useDispatch()
  const { active:note, messageSave, isSaving} = useSelector( state => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(note)

  const dateString = useMemo( () => {
    const newDate = new Date( date );
    return newDate.toUTCString()
  }, [ date ])

  const fileInputRef = useRef()

  useEffect(() => {
    dispatch(setActiveNote(formState)) 
  }, [ formState ]);

  useEffect(() => {
    if( messageSave.length > 0){
      Swal.fire('Nota actualizada', messageSave, 'success')
    }
  }, [ messageSave ])
  
  
  const onSaveNote = () => {
    dispatch( startSaveNote() )
  }

  const onFileInputChnage = ({ target }) => {
    if( target.files === 0 ) return

    dispatch( startUploadingFiles( target.files ))
  }
  
  return (
    <Grid container direction={'row'} justifyContent='space-between' alignItems={'center'} sx={{ mb: 1}}>
      <Grid item>
        <Typography fontSize={30} fontWeight='ligth'>{dateString}</Typography>
      </Grid>

      <input 
        type={"file"} 
        multiple 
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={onFileInputChnage}
      />

      <IconButton color="primary" disabled={isSaving} onClick={() => fileInputRef.current.click()}>
        <FontAwesomeIcon icon={faUpload}/>
      </IconButton>

      <Grid item>
        <Button 
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary" 
          sx={{padding: 2}}>
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

      <ImageGallery images={note.imageUrls} />
    </Grid>
  )
}
