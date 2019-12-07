import { connect } from 'react-redux';
import StorePage from '../components/StorePage';
import ActionTypes from '../../../actions/ActionTypes';


const mapDispatchToProps = dispatch => ({
    postTransaction: (payload) => {
        dispatch({ type: ActionTypes.POST_TRANSACTION, payload });
    },
});

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    user: state.user.profile,
    currentRoute: state.currentRoute
});

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);