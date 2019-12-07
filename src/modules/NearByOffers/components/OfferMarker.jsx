import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fastfood, LocalHotel, ShoppingCart } from '@material-ui/icons';
import clsx from  'clsx';

const CATEGORY_ICON_MAPPING = {
  food: Fastfood,
  hotel: LocalHotel,
  shopping: ShoppingCart
};

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
        background: theme.palette.primary.main,
        position: 'absolute',
        padding: 5,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '50% 50% 50% 0',
        top: '40%',
        left: '50%',
        marginLeft: '-115px',
        border: '4px solid #fff',
        width: '60px',
        height: '60px',
        transform: 'rotate(-45deg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10px',
        animation: 'land 0.5s ease 2s alternate',
    },
    markerContent: {
        transform: 'rotate(45deg)',
        textAlign: 'center',
    },
    icon: {
        width: '100%',
        marginTop: '-4px'
    }
});

const OfferMarker = (props) => {
    const {classes, text, category} = props;
    const CategoryIcon = CATEGORY_ICON_MAPPING[category];
    return (<div className={clsx(classes.markerWrapper)}>
        <div className={classes.markerContent}>
            {CategoryIcon ? (<CategoryIcon className={classes.icon}/>): null}
            {text}
        </div>
    </div>);

};

export default withStyles(style)(OfferMarker);