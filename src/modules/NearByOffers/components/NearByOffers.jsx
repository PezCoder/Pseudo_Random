import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MapView from './MapView';

const style = (theme) => ({
    root: {
        width: '100%'
    }
});

const NearByOffers = (props) => {
    const {classes} = props;
    return (<>
     <MapView/>
    </>);

};

export default withStyles(style)(NearByOffers);
