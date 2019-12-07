import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import StoreCard from './StoreCard';

const style = (theme) => ({
    root: {
        width: '100%'
    }
});

const stores = [1,2,3,4,5]

const StoreList = (props) => {
    const {classes} = props;
    return <>
        {stores.map(store=> (<a href="/store/1"><StoreCard /></a>))}
    </>
};

export default withStyles(style)(StoreList)
