import React from 'react';
import { AppBar, IconButton, Toolbar, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DividerVertical } from './shared/DividerVertical';
import {
  Face,
  GetApp,
  InsertEmoticon,
  Laptop,
  LibraryBooks,
} from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  opacity: {
    '&:hover': {
      opacity: 0.8,
    },
  },
  active: {
    color: '#edf1fe',
    paddingTop: '1px',
    borderBottom: '1px solid #edf1fe',
    borderRadius: '0px',
    borderBottomWidth: '1px',
  },
});

export const Appbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position='relative'
        elevation={5}
        style={{
          backgroundColor: 'transparent',
          borderLeft: '1px solid white',
          borderRight: '1px solid white',
          borderTop: '0px',
          borderBottom: '1px solid white',
          borderBottomLeftRadius: '15px',
          WebkitBorderBottomRightRadius: '15px',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Toolbar variant='dense'>
          <Tooltip title='HOME'>
            <IconButton
              color='inherit'
              exact
              className={classes.opacity}
              activeClassName={classes.active}
              component={NavLink}
              to='/'
            >
              <InsertEmoticon fontSize='large' />
            </IconButton>
          </Tooltip>
          <DividerVertical />
          <Tooltip title='ABOUT ME'>
            <IconButton
              color='inherit'
              exact
              className={classes.opacity}
              activeClassName={classes.active}
              component={NavLink}
              to='/about'
            >
              <Face fontSize='large' />
            </IconButton>
          </Tooltip>
          <DividerVertical />
          <Tooltip title='RESUME'>
            <IconButton
              color='inherit'
              exact
              className={classes.opacity}
              activeClassName={classes.active}
              component={NavLink}
              to='/resume'
            >
              <LibraryBooks fontSize='large' />
            </IconButton>
          </Tooltip>
          <DividerVertical />
          <Tooltip title='PROJECTS'>
            <IconButton
              color='inherit'
              exact
              className={classes.opacity}
              activeClassName={classes.active}
              component={NavLink}
              to='/projects'
            >
              <Laptop fontSize='large' />
            </IconButton>
          </Tooltip>
          <DividerVertical />
          <Tooltip title='DOWNLOAD CV'>
            <IconButton
              color='inherit'
              className={classes.opacity}
              component={Link}
              target='_blank'
              to='/files/CV-Dario-Herrera.pdf'
            >
              <GetApp fontSize='large' />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </>
  );
};
