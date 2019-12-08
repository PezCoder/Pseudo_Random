import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Drawer, Divider,
  List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Button,
  ListSubheader, ListItemAvatar, Avatar,
} from '@material-ui/core';
import Loading from 'react-fullscreen-loading';

import { ArrowBack, Dashboard as DashboardIcon, Menu as MenuIcon } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import logoImage from '../../../../public/images/grab_logo_158.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    '&a': {
      textDecoration: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 100,
    marginTop: 10,
    marginLeft: 10,
  },
  topBar: {
    height: 50,
  },
  bottomList: {
    width: 250,
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    }
  },
  drawer: {

  },
  bottomProfileCard: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
    position: 'absolute',
    width: '99%',
    bottom: 0,
  },
});


const Header = (props) => {
  const {
    classes, currentRoute, common, user,
  } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuList = side => (
    <div
      className={classes.bottomList}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <a href="/">
          <ListItem button key="Dashboard">
              <ListItemIcon><DashboardIcon color="primary"/></ListItemIcon>
              <ListItemText primary="Dashboard" />
          </ListItem>
      </a>
      </List>
      <Divider/>
    </div>
  );
  return (
    <div className={classes.root}>
      {common.isLoading? <Loading  loading background="#00000000" loaderColor="#6f9d64" />: null}
      <AppBar position="static" id="header" color="white">
        <Toolbar className={classes.topBar}>
          <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <img src={logoImage} alt="logo" className={classes.logo} />
          </Typography>
          <Typography variant="h6" className={classes.title} />
          {
            currentRoute.name !== 'dashboard' ? (
              <Button href="/">
                <ArrowBack style={{ marginRight: '10px' }} />
                {' Back to dashboard'}
              </Button>
            ) : null
          }
        </Toolbar>
        <Drawer open={isDrawerOpen} onClose={toggleDrawer} className={classes.drawer}>
          {menuList('left')}
        </Drawer>
      </AppBar>
    </div>
  );
};

Header.defaultProps = {
  currentRoute: {},
  user: {},
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  currentRoute: PropTypes.object
};


export default withStyles(styles)(Header);
