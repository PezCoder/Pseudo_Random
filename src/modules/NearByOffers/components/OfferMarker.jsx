import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const style = (theme) => ({
    root: {
        width: '100%',
    },
    markerWrapper: {
        '&::after': {
            position: 'absolute',
            content: '',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            marginLeft: '-5px',
            marginTop: '-5px',
            backgroundColor: '#fff'
        },
        background: '#6f9d64',
        position: 'absolute',
        padding: 5,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '50% 50% 50% 0',
        top: '40%',
        left: '50%',
        marginLeft: '-115px',
        border: '4px solid #fff',
        width: '40px',
        height: '40px',
        transform: 'rotate(-45deg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',

    },
    markerContent: {
        transform: 'rotate(45deg)',
        textAlign: 'center',
    },
});

const OfferMarker = (props) => {
    const {classes} = props;
    return (<div className={classes.markerWrapper}>
        <div className={classes.markerContent}>
            32% OFF
        </div>
    </div>);

};

export default withStyles(style)(OfferMarker);
