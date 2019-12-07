import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { geolocated } from 'react-geolocated';

import MapView from './MapView';

const style = (theme) => ({
    root: {
        width: '100%'
    }
});

const NearByOffers = (props) => {
    const {classes, showMarkerBottomSheet, isGeolocationAvailable, coords, isGeolocationEnabled, fetchOffers, offers} = props;
    console.log('coords', coords);

  if (!isGeolocationAvailable)  {
        return (<div>Your browser does not support Geolocation</div>);
    }

    const [coordState, setCoordState] = useState(null);

    if (!isGeolocationEnabled) {
        return (<div>Geolocation is not enabled</div>);
    }
    if (coordState === null && coords && coords.latitude) {
        //setCoordState(coords);
    }

    useEffect(()=> {
      console.log('calling coords');
        fetchOffers(coords);
    }, [coords]);



    if (coords) {
        return (<>
            <MapView showMarkerBottomSheet={showMarkerBottomSheet} coords={coords} offers={offers}/>
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
