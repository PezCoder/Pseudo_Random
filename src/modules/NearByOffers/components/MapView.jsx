import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

import OfferMarker from './OfferMarker';
import UserMarker from './UserMarker';

const style = (theme) => ({
    root: {
        width: '100%',
    }
});

const MapView = (props) => {
    const {classes, showMarkerBottomSheet, coords = {}, offers} = props;
    const options = {
        gestureHandling: 'greedy',
    };

    const defaultProps = {
        center: {
            lat: coords.latitude,
            lng: coords.longitude
        },
        zoom: 18
    };

    const [markers, setMarkers] = useState([]);
    const [markerSize, setMarkerSize] = useState('lg');

    const onMapLoad = () => {
        setMarkers([        {
            lat: 12.888593,
            lng: 77.597052,
            category: 'food',
            text: '20% CashBack',
        },
            {
                lat: 12.888138,
                lng: 77.597347,
                category: 'food',
                text: '20% OFF'
            },
            {
                lat: 12.961038,
                lng: 77.579689,
                category: 'hotel',
                text: 'Free Upgrade'
            },
            {
                lat: 12.961268,
                lng: 77.581995,
                category: 'shopping',
                text: '50% CashBack'
            },
            {
                lat: 12.887333,
                lng: 77.596827,
                category: 'hotel',
                text: 'Free Upgrade'
            },
            {
                lat: 12.889407,
                lng: 77.597462,
                category: 'hotel',
                text: 'Free Upgrade'
            }
            ]);
    };

    const onMarkerClick = function (marker) {
        console.log(marker);
        console.log('this', this.marker);
        showMarkerBottomSheet(this.marker);
    };

    const handleMapClick = (data) => {
        console.log('data', data);
    };
    const onBoundsChange = (center, zoom) => {
        console.log('zoom', zoom);
        if (zoom < 17 && markerSize !== 'sm') {
            setMarkerSize('sm')
        } else if (zoom > 17 && markerSize !== 'lg') {
            setMarkerSize('lg')
        }
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAn8R4dZN-0obYkHVF2Z5M4wbQmvKTVMLA' }}
                defaultCenter={defaultProps.center}
                options={options}
                onChildClick={ handleMapClick }
                onBoundsChange={ onBoundsChange }
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={onMapLoad}
            >
                <UserMarker lat={coords.latitude} lng={coords.longitude} />
                {markers.map((marker) => (<div {...marker} onClick={onMarkerClick.bind({marker:marker})}><OfferMarker
                    markerSize={markerSize}
                    {...marker}
                /></div>))}

            </GoogleMapReact>
        </div>
    );
};

export default withStyles(style)(MapView);