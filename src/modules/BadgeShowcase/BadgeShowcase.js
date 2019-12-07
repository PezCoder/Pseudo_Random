import React from 'react';
import foodLevel1 from '../../../public/images/food-level-1.png';
import foodLevel2 from '../../../public/images/food-level-2.png';
import foodLevel3 from '../../../public/images/food-level-3.png';
import foodLevel4 from '../../../public/images/food-level-4.png';
import './badgeshowcase.scss';

export default function BadgeShowcase() {
  return (
    <div className="badge-showcase">
      <div className="each-medal">
        <img className="food-level-1" src={foodLevel1} alt="logo" />
        <p>Foodie</p>
      </div>
      <div className="each-medal">
        <img className="food-level-2" src={foodLevel2} alt="logo" />
        <p>Big Foodie</p>
      </div>
      <div className="each-medal">
        <img className="food-level-3" src={foodLevel3} alt="logo" />
        <p>Super Foodie</p>
      </div>
      <div className="each-medal">
        <img className="food-level-4" src={foodLevel4} alt="logo" />
        <p>Connoisseur</p>
      </div>
    </div>
  );
}

