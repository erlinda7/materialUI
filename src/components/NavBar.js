/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import 'fontsource-roboto';
import icon from '../assets/img/branding.jpg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '16px'
  },
  title:{
    flexGrow:1
  },
  imagen: {
    borderRadius: '50%'
  }
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton } color="inherit" >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Borja Script
          </Typography>
          <IconButton color="inherit">
            <img src={icon} width="40px" height="40px" className={classes.imagen} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;
