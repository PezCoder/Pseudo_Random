import React, {useState, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import {Favorite, LocationOn, FavoriteBorder} from '@material-ui/icons';

import OfferMarker from './OfferMarker';
import UserMarker from './UserMarker';
import Chip from '@material-ui/core/Chip';
import {getRandomImg} from '../../../consts/random';


const style = (theme) => ({
  root: {
    width: '100%',
  },
  fixed: {
    '& svg': {
      color: '#6f9d64 !important',
    },
    position: 'absolute',
    zIndex: 9,
    left: '50%',
    transform: 'translateX(-50%)',
  background: 'white',
  border: '1px solid #6f9d64',
  color: '#6f9d64',
  top: '72px'
  }
});

const MapView = (props) => {
  const {classes, showMarkerBottomSheet, coords = {}, offers = []} = props;
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
  useEffect(()=> {
    let formatedOffers = [];
    offers.forEach((offer)=> {
      formatedOffers.push({
        name: offer.merchant.name,
        text: offer.coupon.code,
        lat: offer.merchant.latitude,
        lng: offer.merchant.longitude,
        category: 'food',
        img: getRandomImg(),
      });

    });
    console.log('formatedOffers', formatedOffers);
    setMarkers(formatedOffers);

  }, [offers]);

  const [markers, setMarkers] = useState([]);
  const [markerSize, setMarkerSize] = useState('lg');

  const onMapLoad = () => {

/*    setMarkers([{
      lat: 12.888593,
      lng: 77.597052,
      category: 'food',
      text: '20% CashBack',
      name: 'Bramha Brewery',
      img: getRandomImg(),
    },
      {
        lat: 12.888138,
        lng: 77.597347,
        category: 'food',
        text: '20% OFF',
        img: getRandomImg(),
        name: 'Bramha Brewery',
      },
      {
        lat: 12.961038,
        lng: 77.579689,
        category: 'hotel',
        text: 'Free Upgrade',
        img: getRandomImg(),
        name: 'Bramha Brewery',
      },
      {
        lat: 12.961268,
        lng: 77.581995,
        category: 'shopping',
        text: '50% CashBack',
        img: getRandomImg(),
        name: 'Bramha Brewery',

      },
      {
        lat: 12.887333,
        lng: 77.596827,
        category: 'hotel',
        text: 'Free Upgrade',
        img: getRandomImg(),
        name: 'Bramha Brewery',

      },
      {
        lat: 12.889407,
        lng: 77.597462,
        category: 'hotel',
        text: 'Free Upgrade',
        img: getRandomImg(),
        name: 'Bramha Brewery',

      }
    ]);*/
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
    <div style={{height: '100vh', width: '100%'}}>
      <Chip label="Offers Based on earned Badges"  icon={<Favorite color="primary"/>} className={classes.fixed}/>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyAFucdZ3g_351ahbfokqZyCq8Dvnt8fHPY'}}
        defaultCenter={defaultProps.center}
        options={options}
        onChildClick={handleMapClick}
        onBoundsChange={onBoundsChange}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onMapLoad}
      >
        <UserMarker lat={coords.latitude} lng={coords.longitude}/>
        {markers.map((marker) => (<div {...marker} onClick={onMarkerClick.bind({marker: marker})}><OfferMarker
          markerSize={markerSize}
          {...marker}
        /></div>))}

      </GoogleMapReact>
    </div>
  );
};

export default withStyles(style)(MapView);