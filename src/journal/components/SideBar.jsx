import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"

export const SideBar = ({ drawerWidth}) => {

  const { displayName } = useSelector( state => state.auth )

  return (
    <Box
      component={'nav'}
      sx={{ width: {sm : drawerWidth}, flexShrink: { sm: 0} }}>

        <Drawer 
          variant="permanent"
          open
          sx={{
            dispaly: { xs: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'boder-box', width: drawerWidth}
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component={'div'}>
              { displayName }
            </Typography>
          </Toolbar>
          <Divider/>

          <List>
            {
              ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={ faBookmark }/>
                      </ListItemIcon>

                      <Grid container>
                        <ListItemText primary={text}/>
                        <ListItemText secondary={ 'Aliqua nisi minim magna voluptate aliqua commodo eu et incididunt.' }/>
                      </Grid>

                    </ListItemButton>
                  </ListItem>
                ))
            }

          </List>

        </Drawer>
    </Box>
  )
}
