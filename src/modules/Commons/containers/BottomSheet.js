import { connect } from 'react-redux';

import BottomSheet from '../components/BottomSheet';
import ActionTypes from '../../../actions/ActionTypes';


const mapDispatchToProps = dispatch => ({
    fetchResumeList: () => {
        //dispatch({ type: ActionTypes.FETCH_USER_RESUMES });
    },
    handleClose: ()=> {
        dispatch({type: ActionTypes.CLOSE_BOTTOM_SHEET});
    }
});
const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
   data: state.bottomSheet.data
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomSheet);