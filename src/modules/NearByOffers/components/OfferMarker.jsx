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
    sm: {
        transform: 'rotate(-45deg) scale(0.4)',
        borderColor: '#6f9d64',
        '& svg': {
            marginTop: '3px'
        }
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
    const {classes, text, category, markerSize} = props;
    const CategoryIcon = CATEGORY_ICON_MAPPING[category];
    let sizeCls = 'lg';
    if (markerSize === 'sm') {
        sizeCls = 'sm'
    }
    return (<div className={clsx(classes.markerWrapper, classes[markerSize])}>
        <div className={classes.markerContent}>
            {CategoryIcon ? (<CategoryIcon className={classes.icon}/>): null}
            {markerSize === 'lg' ? text: null}
        </div>
    </div>);

};

export default withStyles(style)(OfferMarker);