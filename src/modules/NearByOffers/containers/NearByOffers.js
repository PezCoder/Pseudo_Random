import { connect } from 'react-redux';
import NearByOffers from '../components/NearByOffers';
import ActionTypes from '../../../actions/ActionTypes';


const mapDispatchToProps = dispatch => ({
    fetchOffers: (coords) => {
        dispatch({ type: ActionTypes.FETCH_OFFERS, payload:coords });
    },
    showMarkerBottomSheet: (info) => {
        dispatch({type: ActionTypes.SET_BOTTOM_SHEET, payload: info});
    }
});

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    user: state.user.profile,
    currentRoute: state.currentRoute,
    offers: state.offers.offers,
});

export default connect(mapStateToProps, mapDispatchToProps)(NearByOffers);