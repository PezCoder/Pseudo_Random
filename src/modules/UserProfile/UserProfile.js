import React from 'react';
import './userProfile.scss';
import userIcon from '../../../public/images/user-icon.png';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import screenshot from '../../../public/images/screenshot.png';

export default function UserProfile() {
  return (
    <div className="user-profile">
      <img className="food-level-1" src={userIcon} alt="logo" />
        <div className="user-profile__content">
          <h4 className="user-profile__name">Rahul Gupta</h4>
          <p className="user-profile__ratings">
            <StarBorderIcon />
            <div className="user-profile__text">
              <span className="user-profile__text__value">4.3</span>
              <span className="user-profile__text__name">Ratings</span>
            </div>
          </p>
        </div>
    </div>
  );
}
