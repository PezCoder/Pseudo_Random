import React from 'react';
import foodie from '../../../public/images/foodie.png';
import bigFoodie from '../../../public/images/bigFoodie.png';
import superFoodie from '../../../public/images/superFoodie.png';
import connoisseur from '../../../public/images/connoisseur.png';
// import varietyExpert from '../../../public/images/varietyExpert.png';
// import sweetTooth from '../../../public/images/sweetTooth.png';
// import hardcoreNonVeg from '../../../public/images/hardcoreNonVeg.png';
import goVegan from '../../../public/images/goVegan.png';
// import dayStreak from '../../../public/images/dayStreak.png';
// import healthy from '../../../public/images/healthy.png';
import './badgeshowcase.scss';

export default function UpcomingBadgeShowcase() {
  const medals = [{
    name: 'Foodie',
    imageUrl: foodie,
    achieved: 10,
    target: 20,
  }, {
    name: 'Big Foodie',
    imageUrl: bigFoodie,
    achieved: 10,
    target: 20,
  }, ];
  return (
    <div className="badge-showcase">
      <h4 className="badge-showcase__heading">UPCOMING BADGES</h4>
      <div className="badges">
        { medals.map(medal => (
          <div className="each-medal">
            <img className="food-level-1" src={medal.imageUrl} alt="logo" />
            <p>{ medal.name }</p>
          </div>
        )) }
      </div>
    </div>
  );
}
