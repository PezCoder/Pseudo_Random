import { connect } from 'react-redux';
import NearByOffers from '../components/NearByOffers';
import ActionTypes from '../../../actions/ActionTypes';


const mapDispatchToProps = dispatch => ({
    fetchResumeList: () => {
        //dispatch({ type: ActionTypes.FETCH_USER_RESUMES });
    },
    showMarkerBottomSheet: (info) => {
        dispatch({type: ActionTypes.SET_BOTTOM_SHEET, payload: info});
    }
});

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    user: state.user.profile,
    currentRoute: state.currentRoute
});

export default connect(mapStateToProps, mapDispatchToProps)(NearByOffers);