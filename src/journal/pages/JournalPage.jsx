import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal)
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch( startNewNote())
  }

  return (
    <JournalLayout>
      
      {
        !!active 
        ? <NoteView /> 
        : <NothingSelectedView/>
      }


      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.8},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >

        <FontAwesomeIcon icon={ faPlus }/>

      </IconButton>
      
    </JournalLayout>
  )
}
