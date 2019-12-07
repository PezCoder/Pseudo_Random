import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';

import { Favorite, LocationOn } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';


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
            <BottomNavigationAction label="Upcoming Badges" icon={<PersonIcon />} component={Link} to="/"/>
            <BottomNavigationAction label="My Badges" icon={<PersonIcon />} component={Link} to="/badges/all"/>
            <BottomNavigationAction label="Favorites" icon={<Favorite  />} component={Link} to="/favorites"/>
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} component={Link} to="/NearByOffers"/>
        </BottomNavigation>
    );
}

export default withStyles(style)(BottomNav);
