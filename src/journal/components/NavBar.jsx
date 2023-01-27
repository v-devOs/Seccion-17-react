import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks"

export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch( startLogout());
  }

  return (
    <AppBar 
      position='fixed'
      sx={{
          width: {sm: `calc(100% - ${drawerWidth}px)`},
          ml: { sm: `${drawerWidth}px`}

      }}
    >

      <Toolbar>
        <IconButton
          color = 'inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none'} }}
        >
          <FontAwesomeIcon icon={faBars}/>
        </IconButton>


        <Grid container direction={'row'} justifyContent='space-between' alignItems={'center'}>
          <Typography variant="h6" noWrap component={'div'}> JournalApp </Typography>

          <IconButton color='error' onClick={onLogout}>
            <FontAwesomeIcon icon={faRightFromBracket}/>
          </IconButton>
        </Grid>
      </Toolbar>

    </AppBar>
  )
}
