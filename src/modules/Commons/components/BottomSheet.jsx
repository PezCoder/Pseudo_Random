import React, {useState, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';

import {Close} from '@material-ui/icons';

import OfferCard from '../../NearByOffers/components/OfferCard';

const styles = theme => ({
    root: {
        backgroundColor: 'rgba(0,0,0,.4)',
        display: 'block',
        height: '100%',
        position: 'fixed',
        top: 0,
        transition: 'all .45s cubic-bezier(.32,1,.23,1) 0ms',
        width: '100%',
        zIndex: 999999,
    },
    content: {
        /*backgroundColor: '#fff',*/
        bottom: 0,
        boxShadow: '0 10px 20px rgba(0,0,0,.22), 0 14px 56px rgba(0,0,0,.25)',
        position: 'fixed',
        transform: 'translateY(0)!important',
        transition: 'all .45s cubic-bezier(.32,1,.23,1) .1s',
        width: '100%',
        zIndex: 10,
        minHeight: '200px'
    },
    closeBtn: {
        position: 'absolute',
        right: '9px',
        top: '-51px',
        background: '#0b0b0b8f',
        borderRadius: '50%',
        padding: '10px',
        paddingBottom: '6px',
        color: '#fff'
    }
});

const BottomSheet = (props) => {
    const {classes, data, handleClose, activeOffer} = props;
    let wrapperRef = null;
    if (!data)
        return null;

    const handleClickOutside = (event) => {
        if (wrapperRef && !wrapperRef.contains(event.target)) {
            handleClose();
        }
    };

    const setWrapperRef = (node) => {
        wrapperRef = node;
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', () => {
            })
        }
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.content} ref={setWrapperRef}>
                <div className={classes.closeBtn} onClick={handleClose}>
                    <Close/>
                </div>
               <OfferCard offer={activeOffer} />
            </div>
        </div>
    )
};

export default withStyles(styles)(BottomSheet);