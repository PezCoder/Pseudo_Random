import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { geolocated } from 'react-geolocated';

import MapView from './MapView';

const style = (theme) => ({
    root: {
        width: '100%'
    }
});

const NearByOffers = (props) => {
    const {classes, showMarkerBottomSheet, isGeolocationAvailable, coords, isGeolocationEnabled} = props;
    if (!isGeolocationAvailable)  {
        return (<div>Your browser does not support Geolocation</div>);
    }

    if (!isGeolocationEnabled) {
        return (<div>Geolocation is not enabled</div>);
    }
    console.log('coords', coords);

    if (coords) {
        return (<>
            <MapView showMarkerBottomSheet={showMarkerBottomSheet} coords={coords}/>
        </>);
    } else {
        return (<div>Geolocation is not enabled</div>);
    }


};

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(withStyles(style)(NearByOffers))
