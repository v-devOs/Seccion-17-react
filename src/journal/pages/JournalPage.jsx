import { Typography } from '@mui/material'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const JournalPage = () => {
  return (
    <>
      <Typography variant='h1'>JournalPage
      </Typography>

      
      <FontAwesomeIcon icon={ faEnvelope } />
    </>
  )
}
