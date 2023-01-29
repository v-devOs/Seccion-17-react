import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({ title = '', body, id, date, imageUrls = []}) => {

  const dispatch = useDispatch()

  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0,17) + '...'
      : title
  }, [ title ])

  const onClickNote = () => {
    dispatch( setActiveNote({ title, body, id, date, imageUrls}))
  }

  return (
    <ListItem disablePadding >
      <ListItemButton onClick={onClickNote}>
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
