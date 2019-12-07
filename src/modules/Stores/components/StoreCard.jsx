import React from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import NearMe from '@material-ui/icons/NearMe';

const style = (theme) => ({
    root: {
        width: '100%'
    }
});

const StoreCard = (props) => {
    const {classes} = props;
    return (
        <div className="first">
            <div className="food1">
                <img src="https://p1.picsto.re/X538D.jpg" className="image"/>
                <h3 className="h3-image">200m</h3>
            </div>
        <div className="description">
            <div className="border"></div>
            <div className="icon orange">
                <a href="#" className="material-icons icon-orange"><FastfoodIcon/></a>
            </div>
            <p>il domacca
                <span className="food-span">78 5th avenue, new york</span>
            </p>
            <div className="like">
                <a href="#" className="material-icons"><NearMe/></a>
            </div>
        </div>
    </div>);
};

export default withStyles(style)(StoreCard)
