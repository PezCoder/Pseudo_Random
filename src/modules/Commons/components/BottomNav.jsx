import React from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';

import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {Favorite, LocationOn, FavoriteBorder} from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import FastfoodIcon from '@material-ui/icons/Fastfood';


const style = (theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        borderTop: `1px solid ${theme.palette.primary.main}`
    },
    navRoot: {
      padding: '10px 10px'
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
    center: {
        textAlign: 'center',
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
            classes={{
              root: classes.navRoot
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Upcoming Badges"
                                    classes={{
                                        root: classes.center
                                    }}
                                    icon={<FavoriteBorder/>}
                                    component={Link} to="/"/>
            <BottomNavigationAction label="My Badges" icon={<Favorite/>} component={Link} to="/badges/all"/>
            <BottomNavigationAction label="Order Food" icon={<FastfoodIcon/>} component={Link} to="/stores"/>
            <BottomNavigationAction label="Nearby" icon={<LocationOn/>} component={Link} to="/NearByOffers"/>
        </BottomNavigation>
    );
}

export default withStyles(style)(BottomNav);
