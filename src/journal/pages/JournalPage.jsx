import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, illo quam! Quasi commodi dicta rerum sed earum maxime laborum id perspiciatis a debitis alias officia ad cumque, vitae temporibus rem illo omnis tempore. Corrupti provident fugit et natus accusamus libero dolor? Hic, odit, inventore ratione vero saepe, placeat nobis velit distinctio cumque consectetur quisquam explicabo provident cupiditate porro ipsa assumenda libero eius molestiae voluptatibus! Delectus impedit repellat tempore nemo unde exercitationem, ex minus molestiae praesentium sapiente. Repellat numquam facere doloremque quaerat atque ad asperiores saepe. Voluptates quod ullam dolor, qui reprehenderit rem rerum sapiente excepturi labore eos cum! Officia, dignissimos.
      </Typography> */}
      <NothingSelectedView/>
      {/* <NoteView /> */}


      <IconButton
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
