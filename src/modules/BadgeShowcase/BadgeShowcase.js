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
import { connect } from 'react-redux';

import './badgeshowcase.scss';
import ActionTypes from "../../actions/ActionTypes";

function BadgeShowcase(props) {
  const {fetchCompletedBadges, completed} = props;
  useEffect(()=> {
    fetchCompletedBadges();
  });
  const medals = [{
    name: 'Foodie',
    imageUrl: foodie,
  }, {
    name: 'Big Foodie',
    imageUrl: bigFoodie,
  }, {
    name: 'Super Foodie',
    imageUrl: superFoodie,
  }, {
    name: 'Connoisseur',
    imageUrl: connoisseur,
  }, {
    name: 'Go Vegan!',
    imageUrl: goVegan,
  }];
  return (
    <div className="badge-showcase">
      <h4 className="badge-showcase__heading">YOUR BADGES</h4>
      <div className="badges">
        { medals.map(medal => (
          <div className="each-medal">
            <img className="original" src={medal.imageUrl} alt="logo" />
            <div className="medal-details">
              <p className="medal-name">{ medal.name }</p>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}



const mapDispatchToProps = dispatch => ({
    fetchCompletedBadges: (coords) => {
        dispatch({ type: ActionTypes.FETCH_COMPLETED_BADGE});
    },
});

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    user: state.user.profile,
    currentRoute: state.currentRoute,
    completed: state.badges.completed,
});

export default connect(mapStateToProps, mapDispatchToProps)(BadgeShowcase)


