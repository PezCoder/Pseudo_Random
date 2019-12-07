import { connect } from 'react-redux';
import NearByOffers from '../components/NearByOffers';


const mapDispatchToProps = dispatch => ({
    fetchResumeList: () => {
        //dispatch({ type: ActionTypes.FETCH_USER_RESUMES });
    },
});

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    user: state.user.profile,
    currentRoute: state.currentRoute
});

export default connect(mapStateToProps, mapDispatchToProps)(NearByOffers);