import { connect } from 'react-redux';
import StorePage from '../components/StorePage';
import ActionTypes from '../../../actions/ActionTypes';


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

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);