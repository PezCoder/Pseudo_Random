import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';

import { Restore, Favorite, LocationOn } from '@material-ui/icons';


const style = (theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        borderTop: `1px solid ${theme.palette.primary.main}`
    }
});


const BottomNav = (props) => {
    const {classes} = props;
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            color="primary"
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Recents" icon={<Restore />} component={Link} to="/recents"/>
            <BottomNavigationAction label="Favorites" icon={<Favorite  />} component={Link} to="/favorites"/>
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} component={Link} to="/nearby"/>
        </BottomNavigation>
    );
}

export default withStyles(style)(BottomNav);