import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

export const SideBarItem = ({ title = '', body, id }) => {

  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0,17) + '...'
      : title
  }, [ title ])

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <FontAwesomeIcon icon={ faBookmark }/>
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={ newTitle }/>
          <ListItemText secondary={ body }/>
        </Grid>

      </ListItemButton>
    </ListItem>
  )
}
