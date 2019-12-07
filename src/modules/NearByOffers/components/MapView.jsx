import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

import OfferMarker from './OfferMarker';

const style = (theme) => ({
    root: {
        width: '100%',
    }
});

const MapView = (props) => {
    const {classes} = props;
    const options = {
        gestureHandling: 'greedy',
    };

    const defaultProps = {
        center: {
            lat: 12.960568,
            lng: 77.580805
        },
        zoom: 11
    };

    const markers = [
        {
            lat: 12.960118,
            lng: 77.580569,
        },
        {
            lat: 12.960077,
            lng: 77.582746,
        },
        {
            lat: 12.961038,
            lng: 77.579689,
        },
        {
            lat: 12.961268,
            lng: 77.581995,
        }
    ];
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAn8R4dZN-0obYkHVF2Z5M4wbQmvKTVMLA' }}
                defaultCenter={defaultProps.center}
                options={options}
                defaultZoom={defaultProps.zoom}
            >
                {markers.map((marker)=> (<OfferMarker
                    lat={marker.lat}
                    lng={marker.lng}
                    text="My Marker"
                />))}

            </GoogleMapReact>
        </div>
    );
};

export default withStyles(style)(MapView);