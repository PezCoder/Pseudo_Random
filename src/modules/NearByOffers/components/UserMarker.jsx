import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Person, LocalHotel, ShoppingCart } from '@material-ui/icons';
import clsx from  'clsx';


const style = (theme) => ({
    root: {
        width: '100%',
    },
    markerWrapper: {
        background: '#005ed7d1',
        position: 'absolute',
        padding: 5,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '50%',
        border: '4px solid #fff',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10px',
        animation: 'bounce 1s infinite',
    },
    markerContent: {
        textAlign: 'center',
    },
    icon: {
        width: '100%',
        marginTop: '-4px'
    }
});

const UserMarker = (props) => {
    const {classes, text, category} = props;
    return (<div className={clsx(classes.markerWrapper)}>
        <div className={classes.markerContent}>
          <Person/>
        </div>
    </div>);

};

export default withStyles(style)(UserMarker);