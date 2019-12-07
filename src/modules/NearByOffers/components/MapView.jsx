import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

import OfferMarker from './OfferMarker';

const style = (theme) => ({
    root: {
        width: '100%',
    }
});

const MapView = (props) => {
    const {classes, showMarkerBottomSheet} = props;
    const options = {
        gestureHandling: 'greedy',
    };

    const defaultProps = {
        center: {
            lat: 12.960077,
            lng: 77.580805
        },
        zoom: 18
    };

    const [markers, setMarkers] = useState([]);

    const onMapLoad = () => {
        setMarkers([        {
            lat: 12.960118,
            lng: 77.580569,
            category: 'food',
            text: '20% CashBack',
        },
            {
                lat: 12.960077,
                lng: 77.582746,
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
            }]);
    };

    const onMarkerClick = function (marker) {
        console.log(marker);
        console.log('this', this.marker);
        showMarkerBottomSheet(this.marker);
    };

    const handleMapClick = (data) => {
        console.log('data', data);
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAn8R4dZN-0obYkHVF2Z5M4wbQmvKTVMLA' }}
                defaultCenter={defaultProps.center}
                options={options}
                onChildClick={ handleMapClick }

                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={onMapLoad}
            >
                {markers.map((marker) => (<div {...marker} onClick={onMarkerClick.bind({marker:marker})}><OfferMarker
                    {...marker}
                /></div>))}

            </GoogleMapReact>
        </div>
    );
};

export default withStyles(style)(MapView);