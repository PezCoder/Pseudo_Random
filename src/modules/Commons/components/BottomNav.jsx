import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Favorite, LocationOn } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';


const style = (theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        borderTop: `1px solid ${theme.palette.primary.main}`
    },
    hero: {
        color: '#fff',
        borderRadius: '50%',
        background: theme.palette.primary.main,
        padding: '8px 0px',
        width: '59px',
        height: '62px',
        marginTop: '-36px',
        fontWeight: 'bold',
        flexGrow: 0,

    },
    'selected': {
        background: 'white',
        border: `1px solid ${theme.palette.primary.main}`
    },
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
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} component={Link} to="/"/>
            <BottomNavigationAction  label="Pay" icon={<MonetizationOnIcon  />} component={Link} to="/pay"/>
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} component={Link} to="/NearByOffers"/>
        </BottomNavigation>
    );
}

export default withStyles(style)(BottomNav);
