import React, {useEffect} from 'react';
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
import ActionTypes from "../../actions/ActionTypes";
import {connect} from "react-redux";

function UpcomingBadgeShowcase(props) {
  const {fetchUpcomingBadges, upcoming} = props;

  useEffect(() => {
    fetchUpcomingBadges();
  });
  const medals = [{
    name: 'Go Vegan!',
    imageUrl: goVegan,
    achieved: 40,
    target: 100,
  }, {
    name: 'Big Foodie',
    imageUrl: bigFoodie,
    achieved: 0,
    target: 100,
  }, {
    name: 'Super Foodie',
    imageUrl: superFoodie,
    achieved: 0,
    target: 4,
  }, {
    name: 'Connoisseur',
    imageUrl: connoisseur,
    achieved: 50,
    target: 100,
  }, {
    name: 'Foodie',
    imageUrl: foodie,
    achieved: 40,
    target: 100,
  }];
  return (
    <div className="badge-showcase">
      <h4 className="badge-showcase__heading">UPCOMING BADGES</h4>
      <div className="badges">
        { medals.map(medal => (
          <div className="each-medal">
            <figure className="gray-scale" style={{ height: 80 - (medal.achieved/medal.target)*80 }}>
              <img src={medal.imageUrl} alt="logo" />
            </figure>
            <img className="food-level-1" src={medal.imageUrl} alt="logo" />
            <div className="medal-details">
              <p className="medal-name">{ medal.name }</p>
              <p className="medal-value">{medal.achieved}/{medal.target} Orders</p>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    fetchUpcomingBadges: (coords) => {
        dispatch({ type: ActionTypes.FETCH_UPCOMING_BADGE});
    },
});

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    user: state.user.profile,
    upcoming: state.badges.upcoming,
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingBadgeShowcase)

